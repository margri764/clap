import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJobCreatorComponent } from './pages/cardJobCreator/card-job-creator/card-job-creator.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    CardJobCreatorComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    CardJobCreatorComponent

  ]
})
export class JobsModule { }
