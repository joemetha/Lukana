import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';


import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {MenuComponent} from "./menu/menu.component";
import {Routes, Router, RouterModule} from "@angular/router";
import {FileNotComponent} from "./filenotfound/file-not-found-component";
import {AppRoutingModule} from "./app-rounting.module";


import {LukanaHomeComponent} from "./lukana/lukana.home.component";
import {LukanaConvertComponent} from "./lukana/lukana.convert.component";
import {LukanaFindComponent} from "./lukana/lukana.find.component";
import {LukanaTutorialComponent} from "./lukana/lukana.tutorial.component";
import {LukanaInfoComponent} from "./lukana/lukana.info.component";
import {LukanaRoutingModule} from "./route/Lukana-routing.module";
import {LukanaListComponent} from "./lukana/lukana.list.component";




@NgModule({
 declarations: [ AppComponent,
				LukanaTutorialComponent,LukanaInfoComponent,LukanaConvertComponent,LukanaHomeComponent,LukanaFindComponent,LukanaListComponent,
				 MenuComponent,FileNotComponent],
 imports: [BrowserModule,FormsModule, HttpModule, LukanaRoutingModule, AppRoutingModule],
 bootstrap: [AppComponent],
  providers:[ {provide: LocationStrategy, useClass: HashLocationStrategy}]

})
export class AppModule {}
