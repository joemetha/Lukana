import {NgModel} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {LukanaHomeComponent} from "../lukana/lukana.home.component";
import {LukanaConvertComponent} from "../lukana/lukana.convert.component";
import {LukanaFindComponent} from "../lukana/lukana.find.component";
import {LukanaTutorialComponent} from "../lukana/lukana.tutorial.component";
import {LukanaInfoComponent} from "../lukana/lukana.info.component";
import {LukanaListComponent} from "../lukana/lukana.list.component";
/**
 * Created by CAMT on 2/17/2017.
 */
const lukanaRoutes: Routes=[
  {path:'find',component: LukanaFindComponent},
  {path:'tutorial',component: LukanaTutorialComponent},
  {path:'info',component: LukanaInfoComponent},
  {path:'convert',component: LukanaConvertComponent},
  {path:'list',component: LukanaListComponent},
  {path:'home',component: LukanaHomeComponent},
  {path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports:[RouterModule.forRoot(lukanaRoutes)],
  exports:[RouterModule]
})
export class LukanaRoutingModule{

}
