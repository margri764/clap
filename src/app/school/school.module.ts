import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolRoutingModule } from './school-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeSchoolComponent } from './pages/homeSchool/home-school/home-school.component';
import { PostSchoolComponent } from './pages/postSchool/post-school/post-school.component';
import { TagSchoolComponent } from './pages/tagSchool/tag-school/tag-school.component';
import { CardSchoolProposalComponent } from './pages/cardSchoolProposal/card-school-proposal/card-school-proposal.component';
import { CardComponent } from './pages/card/card/card.component';



@NgModule({
  declarations: [
    HomeSchoolComponent,
    PostSchoolComponent,
    TagSchoolComponent,
    CardSchoolProposalComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports:[
    HomeSchoolComponent,
    PostSchoolComponent,
    TagSchoolComponent



  ],
  // providers:[ HomeSchoolComponent]
  providers:[ ]

})
export class SchoolModule { }
