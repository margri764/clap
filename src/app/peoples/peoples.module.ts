import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePeoplesComponent } from './pages/homePeoples/home-peoples.component';
import { MaterialModule } from '../material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardUserComponent } from './pages/card-user/card-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PeoplesRoutingModule } from './peoples-routing.module';



@NgModule({
  declarations: [
    HomePeoplesComponent,
    CardUserComponent
  ],
  imports: [
    CommonModule,
    PeoplesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports:[
    HomePeoplesComponent,
    CardUserComponent

  ],
  providers: [HomePeoplesComponent],

})
export class PeoplesModule { }
