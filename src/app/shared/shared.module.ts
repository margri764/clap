import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { WorkExperienceComponent } from './pages/workExperience/work-experience/work-experience.component';
import { EducationComponent } from './pages/education/education/education.component';
import { JobViewMoreComponent } from '../jobs/pages/jobViewMore/job-view-more/job-view-more.component';
import { HomeJobsComponent } from '../jobs/pages/homeJobs/home-jobs/home-jobs.component';
import { FooterComponent } from './pages/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home/home.component';
import { Page404Component } from './pages/page404/page404/page404.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    WorkExperienceComponent,
    EducationComponent,

    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    EducationComponent,
    WorkExperienceComponent,

  ],
  // providers: [JobViewMoreComponent,HomeJobsComponent],
  

})
export class SharedModule { }
