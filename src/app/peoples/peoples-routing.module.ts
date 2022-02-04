import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePeoplesComponent } from './pages/homePeoples/home-peoples.component';

const routes : Routes =[
  
  {    
    path: "personas", component: HomePeoplesComponent   
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
export class PeoplesRoutingModule { }
