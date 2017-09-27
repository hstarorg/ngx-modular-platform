import { ChildrenOutletContexts, PRIMARY_OUTLET } from '@angular/router';
import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ReflectiveInjector,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { TabsetComponent } from './tabset.component';

@Component({
  selector: 'j-tab-item',
  templateUrl: 'tab-item.component.html'
})
export class TabItemComponent implements OnInit, OnChanges {

  public innerName: string;
  private _active: boolean = false;
  public get active() { return this._active; }
  public set active(val) {
    this._active = val;
    if (val) {
      this.renderer.addClass(this.elementRef.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'active');
    }
  }

  @Input()
  public name: string;

  @Input()
  public header: string;

  @Input()
  public icon: string;

  @Input()
  public comp: any;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  public dynamicComponentContainer: ViewContainerRef;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private tabset: TabsetComponent,
    private resolver: ComponentFactoryResolver,
    private parentContexts: ChildrenOutletContexts
  ) {
  }

  ngOnInit() {
    this.tabset.tabItems.push(this);
    this.elementRef.nativeElement.className = 'j-tab-item tab-pane';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.name) {
      this.innerName = this.name;
    }
    if (changes.comp) {
      // 动态加载组件
      this.loadComponent(this.comp);
    }
  }

  private loadComponent(component: any) {
    let context = this.parentContexts.getContext(PRIMARY_OUTLET);
    let injector = ReflectiveInjector.fromResolvedProviders([], this.dynamicComponentContainer.injector);
    const resolver = context.resolver || this.resolver;
    let factory = resolver.resolveComponentFactory(component);
    let componentIns = factory.create(injector);
    this.dynamicComponentContainer.insert(componentIns.hostView);
  }
}