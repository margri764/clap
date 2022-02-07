import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { HomeBusinessComponent } from './pages/homeBusiness/home-business/home-business.component';
import { CardBusinessProposalComponent } from './pages/cardBussinesProposal/card-business-proposal/card-business-proposal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessRoutingModule } from './business-routing.module';
import { CardComponent } from './pages/card/card/card.component';





@NgModule({
  declarations: [
    HomeBusinessComponent,
    CardBusinessProposalComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports:[
    HomeBusinessComponent,
    CardBusinessProposalComponent
  ],
    providers:[HomeBusinessComponent]

})
export class BusinessModule { }
