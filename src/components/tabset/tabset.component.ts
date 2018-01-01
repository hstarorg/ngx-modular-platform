import './tabset.component.styl';

import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { TabItemComponent } from './tab-item.component';

@Component({
  selector: 'j-tabset',
  templateUrl: 'tabset.component.html'
})
export class TabsetComponent implements OnInit {
  private _currentTabItem: TabItemComponent;
  public tabItems: TabItemComponent[] = [];

  @Input() data: any[] = [];
  @Output() dataChange = new EventEmitter();
  @Input() selected: string;
  @Input() tabsLeft = false;
  @Output() selectedChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selected) {
      this._processSelectedChange(this.selected);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._setTabItemsName();
      this._processSelectedChange(this.selected);
    });
  }

  public removeTab(evt: MouseEvent, tab: TabItemComponent, $event) {
    // tslint:disable-next-line:no-unused-expression
    evt && evt.stopPropagation && evt.stopPropagation();
    let findTabIdx = this.tabItems.indexOf(tab);
    let findTab = this.tabItems[findTabIdx];
    // 主动释放自己
    findTab.destroy();
    this.tabItems.splice(findTabIdx, 1);
    this.data.splice(findTabIdx, 1);
    this.dataChange.emit(this.data);
    if (this.selected === findTab.name) {
      let selected = this.tabItems[
        Math.min(findTabIdx, this.tabItems.length - 1)
      ].name;
      this.selected = selected;
      this.selectedChange.emit(this.selected);
    }
  }

  public setActiveItem(tabItem: TabItemComponent) {
    if (this._currentTabItem === tabItem) {
      return;
    }
    if (this._currentTabItem) {
      this._currentTabItem.active = false;
    }
    this._currentTabItem = tabItem;
    this._currentTabItem.active = true;
    this.selectedChange.emit(this._currentTabItem.innerName);
  }

  private _processSelectedChange(name: string) {
    let findTabItem =
      this.tabItems.find(x => x.innerName === name) || this.tabItems[0];
    if (findTabItem) {
      this.setActiveItem(findTabItem);
    }
  }

  private _setTabItemsName() {
    this.tabItems.forEach((item: TabItemComponent, idx: number) => {
      if (!item.innerName) {
        item.innerName = `tabpane-${idx}`;
      }
    });
  }
}
