import {NgModel} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {FileNotComponent} from "./filenotfound/file-not-found-component";

import {NgModule} from "@angular/core";
/**
 * Created by CAMT on 2/17/2017.
 */
const appRoutes: Routes=[
  {path:'**',component: FileNotComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
