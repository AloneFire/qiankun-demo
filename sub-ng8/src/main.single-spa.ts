// import { enableProdMode, NgZone } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { Router } from '@angular/router';
// import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
// import singleSpaAngular, { getSingleSpaExtraProviders } from 'single-spa-angular';
// import { singleSpaPropsSubject } from './single-spa/single-spa-props';

// if (environment.production) {
//   enableProdMode();
// }

// const lifecycles = singleSpaAngular({
//   bootstrapFunction: singleSpaProps => {
//     singleSpaPropsSubject.next(singleSpaProps);
//     return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
//   },
//   template: '<app-root />',
//   Router,
//   NgZone: NgZone,
//   AnimationEngine: AnimationEngine,
// });

// export const bootstrap = lifecycles.bootstrap;
// export const mount = lifecycles.mount;
// export const unmount = lifecycles.unmount;

import { enableProdMode, NgZone } from "@angular/core";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import singleSpaAngular from "single-spa-angular";
import { singleSpaPropsSubject } from "./single-spa/single-spa-props";

if (environment.production) {
  enableProdMode();
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

const { bootstrap, mount, unmount } = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    console.log(platformBrowserDynamic().bootstrapModule(AppModule));
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: "<app-root />",
  Router,
  NgZone,
});

export { bootstrap, mount, unmount };
