import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeEventsComponent } from './pages/homeEvents/home-events/home-events.component';



const routes : Routes =[

  {    
    path: "eventos", component: HomeEventsComponent   
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
export class EventsRoutingModule { }
