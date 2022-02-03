import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { FooterComponent } from './pages/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home/home.component';
import { Page404Component } from './pages/page404/page404/page404.component';
import { SharedRoutingModule } from './shared-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardUserComponent } from './pages/cardUser/card-user/card-user.component';
import { WorkExperienceComponent } from './pages/workExperience/work-experience/work-experience.component';
import { EducationComponent } from './pages/education/education/education.component';
import { JobViewMoreComponent } from '../jobs/pages/jobViewMore/job-view-more/job-view-more.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    CardUserComponent,
    WorkExperienceComponent,
    EducationComponent,

    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    // FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    CardUserComponent,
    EducationComponent,
    WorkExperienceComponent,

  ],
  providers: [JobViewMoreComponent],
})
export class SharedModule { }
