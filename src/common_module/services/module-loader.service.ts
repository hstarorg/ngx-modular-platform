import 'rxjs';

import { Inject, Injectable } from '@angular/core';

import { Http } from '@angular/http';

const moduleDepsMapping: Map<string, string[]> = new Map<string, string[]>();

let instance: ModuleLoaderService = null;

@Injectable()
export class ModuleLoaderService {

  public static load(moduleName: string) {
    return instance.load(moduleName);
  }

  public static defineModule(name: string, deps: string[], callback: Function) {
    let p: Promise<any> = Promise.resolve();
    moduleDepsMapping.set(name, deps || []);
    if (deps && deps.length > 0) {
      let depArr = deps.map(dep => instance.load(dep, true));
      p = Promise.all(depArr);
    }
    return p.then(() => {
      const mod = callback();
      return mod;
    });
  }

  constructor(private http: Http) {
    instance = this;
  }

  load(moduleName: string, isDepModule = false): Promise<any> {
    return new Promise((resolve, reject) => {
      let path = `${AppConf.modulePath}${moduleName}/app.js`;
      this._loadCss(moduleName);
      this.http.get(path)
        .toPromise()
        .then(res => {
          let code = res.text();
          this._DomEval(code);
          return window['ampApp'][moduleName];
        })
        .then(mod => {
          let AppModule = mod.AppModule;
          // route change will call useModuleStyles function.
          // this.useModuleStyles(moduleName, isDepModule);
          resolve(AppModule);
        })
        .catch(err => reject(err));
    });
  }

  useModuleStyles(moduleName: string): void {
    let newkitModuleStyles = [].slice.apply(document.querySelectorAll('.dynamic-module-style'));
    let moduleDeps = this._getModuleAndDeps(moduleName);
    newkitModuleStyles.forEach((link: HTMLLinkElement) => {
      let disabled = true;
      for (let i = moduleDeps.length - 1; i >= 0; i--) {
        if (link.className.indexOf(moduleDeps[i]) >= 0) {
          disabled = false;
          moduleDeps.splice(i, 1);
          break;
        }
      }
      link.disabled = disabled;
    });
  }

  _getModuleAndDeps(moduleName: string): Array<any> {
    if (moduleName === 'system') {
      return [];
    }
    if (!moduleDepsMapping.has(moduleName)) {
      console.warn(`module ${moduleName} not found.`);
      return [];
    }
    let result = [moduleName];
    let deps = moduleDepsMapping.get(moduleName);
    deps.forEach(dep => {
      result.push(...this._getModuleAndDeps(dep));
    });
    return result;
  }

  _loadCss(moduleName: string): void {
    let cssPath = `${AppConf.modulePath}${moduleName}/app.css`;
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', cssPath);
    link.setAttribute('class', `dynamic-module-style ${moduleName}`);
    document.querySelector('head').appendChild(link);
  }

  _DomEval(code: string, doc?: Document) {
    doc = doc || document;
    let script = doc.createElement('script');
    script.text = code;
    doc.head.appendChild(script).parentNode.removeChild(script);
  }
}
