import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePeoplesComponent } from './pages/homePeoples/home-peoples.component';
import { MaterialModule } from '../material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardUserComponent } from './pages/card-user/card-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PeoplesRoutingModule } from './peoples-routing.module';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { ResumeComponent } from './pages/resume/resume/resume.component';



@NgModule({
  declarations: [
    HomePeoplesComponent,
    CardUserComponent,
    ProfileComponent,
    ResumeComponent,
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
    CardUserComponent,
    ProfileComponent


  ],
  providers: [HomePeoplesComponent],

})
export class PeoplesModule { }
