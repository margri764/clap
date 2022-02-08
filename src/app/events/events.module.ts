import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEventsComponent } from './pages/homeEvents/home-events/home-events.component';
import { CardComponent } from './pages/card/card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events-routing.module';
import { CardEventsProposalComponent } from './pages/cardEventsProposal/card-events-proposal.component';



@NgModule({
  declarations: [
    HomeEventsComponent,
    CardComponent,
    CardEventsProposalComponent
 

  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports:[
    HomeEventsComponent,
    CardComponent,
    CardEventsProposalComponent
  ],
    providers:[ HomeEventsComponent]
})
export class EventsModule { }
