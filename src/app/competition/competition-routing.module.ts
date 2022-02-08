import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeCompetitionComponent } from './pages/homeCompetition/home-competition/home-competition.component';



const routes : Routes =[

  {    
    path: "concursos", component: HomeCompetitionComponent   
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
export class CompetitionRoutingModule { }
