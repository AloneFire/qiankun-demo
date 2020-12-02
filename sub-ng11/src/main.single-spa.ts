
import { enableProdMode, NgZone } from '@angular/core';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';


if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);

    // return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
    return platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' })
  },
  template: '<ng-app-demo2-root />',
  Router,
  NavigationStart,
  NgZone: 'noop',
  AnimationEngine,
});

lifecycles.unmount = async function unmount() {
  // 空方法
}

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
