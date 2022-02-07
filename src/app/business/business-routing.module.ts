import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeBusinessComponent } from './pages/homeBusiness/home-business/home-business.component';


const routes : Routes =[

  {    
    path: "empresas", component: HomeBusinessComponent   
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
export class BusinessRoutingModule { }
