import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePeoplesComponent } from './pages/homePeoples/home-peoples.component';
import { MaterialModule } from '../material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardUserComponent } from './pages/card-user/card-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeoplesRoutingModule } from './peoples-routing.module';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { ResumeComponent } from './pages/resume/resume/resume.component';
import { CardEducationComponent } from './pages/cardEducation/card-education/card-education.component';
import { CardSkillsComponent } from './pages/cardSkills/card-skills/card-skills.component';
import { MyapplyComponent } from './pages/myapply/myapply/myapply.component';
import { SettingsComponent } from './pages/settings/settings/settings.component';



@NgModule({
  declarations: [
    HomePeoplesComponent,
    CardUserComponent,
    ProfileComponent,
    ResumeComponent,
    CardEducationComponent,
    CardSkillsComponent,
    MyapplyComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    PeoplesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports:[
    HomePeoplesComponent,
    CardUserComponent,
    ProfileComponent,
    ResumeComponent,



  ],
  providers: [HomePeoplesComponent],

})
export class PeoplesModule { }
