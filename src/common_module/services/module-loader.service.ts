import 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const loadedModules: Set<string> = new Set<string>();

let instance = null;

@Injectable()
export class ModuleLoaderService {

  constructor(private http: Http) {
    instance = this;
  }

  static load(moduleName) {
    return instance.load(moduleName);
  }

  load(moduleName): Promise<any> {
    return new Promise((resolve, reject) => {
      let path = `/dist/modules/${moduleName}/app.js`;
      this.http.get(path)
        .toPromise()
        .then(res => {
          let code = res.text();
          this._DomEval(code);
          resolve(window['ng2App'][moduleName].AppModule);
        }).catch(err => reject(err));
    });
  }

  _DomEval(code, doc?) {
    doc = doc || document;
    var script = doc.createElement("script");
    script.text = code;
    doc.head.appendChild(script).parentNode.removeChild(script);
  }
}