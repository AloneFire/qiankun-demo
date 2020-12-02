import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Demo1Component } from "./demo1/demo1.component";
import { Demo2Component } from "./demo2/demo2.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { APP_BASE_HREF } from "@angular/common";

const routes: Routes = [
  { path: "", component: EmptyRouteComponent },
  { path: "demo1", component: Demo1Component },
  { path: "demo2", component: Demo2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
