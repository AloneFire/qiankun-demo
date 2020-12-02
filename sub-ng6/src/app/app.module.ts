import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Demo1Component } from "./demo1/demo1.component";
import { Demo2Component } from "./demo2/demo2.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    EmptyRouteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
