import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJobCreatorComponent } from './pages/cardJobCreator/card-job-creator/card-job-creator.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeJobsComponent } from './pages/homeJobs/home-jobs/home-jobs.component';
import { JobViewMoreComponent } from './pages/jobViewMore/job-view-more/job-view-more.component';
import { CardJobProposalComponent } from './pages/cardJobProposal/card-job-proposal/card-job-proposal.component';
import { CardComponent } from './pages/card/card/card.component';
import { ApplicantManagementComponent } from './pages/applicantManagement/applicant-management/applicant-management.component';



@NgModule({
  declarations: [
    CardJobCreatorComponent,
    HomeJobsComponent,
    JobViewMoreComponent,
    CardJobProposalComponent,
    CardComponent,
    ApplicantManagementComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    CardJobCreatorComponent,
    HomeJobsComponent,
    JobViewMoreComponent
  ],
  providers: [JobViewMoreComponent,HomeJobsComponent],

})
export class JobsModule { }
