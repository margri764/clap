import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './pages/card/card/card.component';
import { HomeCompetitionComponent } from './pages/homeCompetition/home-competition/home-competition.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CompetitionRoutingModule } from './competition-routing.module';
import { CardCompetitionProposalComponent } from './pages/cardCompetitionProposal/card-competition-proposal/card-competition-proposal.component';
import { MaterialModule } from '../material/material/material.module';


@NgModule({
  declarations: [
    HomeCompetitionComponent,
    CardComponent,
    CardCompetitionProposalComponent
    
  ],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],

  exports:[
    HomeCompetitionComponent,
    CardComponent,
    CardCompetitionProposalComponent


  ],
  providers:[
    HomeCompetitionComponent,
    CardComponent,
    CardCompetitionProposalComponent


  ]
})
export class CompetitionModule { }
