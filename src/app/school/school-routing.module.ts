import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSchoolComponent } from './pages/homeSchool/home-school/home-school.component';
import { RouterModule, Routes } from '@angular/router';



const routes : Routes =[

  {    
    path: "escuelas", component: HomeSchoolComponent   
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
export class SchoolRoutingModule { }
