import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeJobsComponent } from './pages/homeJobs/home-jobs/home-jobs.component';
import { JobViewMoreComponent } from './pages/jobViewMore/job-view-more/job-view-more.component';
import { ApplicantManagementComponent } from './pages/applicantManagement/applicant-management/applicant-management.component';

const routes : Routes =[
  {
    
    path: "empleos", component: HomeJobsComponent   
  },
  {
    path: "ver-empleo", component: JobViewMoreComponent   
  },
  {
    path: "gestion-aplicantes", component: ApplicantManagementComponent   
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild ( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class JobsRoutingModule { }
