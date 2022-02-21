import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material/material.module';

import { HomePeoplesComponent } from './pages/homePeoples/home-peoples.component';
import { CardUserComponent } from './pages/card-user/card-user.component';
import { PeoplesRoutingModule } from './peoples-routing.module';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { ResumeComponent } from './pages/resume/resume/resume.component';
import { CardEducationComponent } from './pages/cardEducation/card-education/card-education.component';
import { CardSkillsComponent } from './pages/cardSkills/card-skills/card-skills.component';
import { MyapplyComponent } from './pages/myapply/myapply/myapply.component';
import { SettingsComponent } from './pages/settings/settings/settings.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks/bookmarks.component';
import { IndustryComponent } from './pages/industry/industry/industry.component';
import { WorkExperienceComponent } from './pages/workExperience/work-experience/work-experience.component';



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
    BookmarksComponent,
    IndustryComponent,
    WorkExperienceComponent
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
    CardEducationComponent,
    CardSkillsComponent,
    MyapplyComponent,
    SettingsComponent,
    BookmarksComponent,
    IndustryComponent,
    WorkExperienceComponent




  ],
  providers: [HomePeoplesComponent],

})
export class PeoplesModule { }
