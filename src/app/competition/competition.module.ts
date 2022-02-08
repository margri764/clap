import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './pages/card/card/card.component';
import { HomeCompetitionComponent } from './pages/homeCompetition/home-competition/home-competition.component';
import { CardCompetitionProposalComponent } from './pages/cardCompetitionProposal/card-competition-proposal/card-competition-proposal.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompetitionRoutingModule } from './competition-routing.module';
import { CardCompetitionComponent } from './pages/cardCompetition/card-competition/card-competition.component';


@NgModule({
  declarations: [
    HomeCompetitionComponent,
    CardCompetitionProposalComponent,
    CardComponent,
    CardCompetitionComponent
    
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
    CardCompetitionProposalComponent,
    CardComponent

  ],
  providers:[
    HomeCompetitionComponent,

  ]
})
export class CompetitionModule { }
