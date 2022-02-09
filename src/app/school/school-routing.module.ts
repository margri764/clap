import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostSchoolComponent } from './pages/postSchool/post-school/post-school.component';
import { HomeSchoolComponent } from './pages/homeSchool/home-school/home-school.component';
import { TagSchoolComponent } from './pages/tagSchool/tag-school/tag-school.component';


const routes : Routes =[

  {
    path: '',

    children: [
      {    
        path: "lista", component: HomeSchoolComponent   
      },
    
      {    
        path: "posteo", component: PostSchoolComponent   
      },
     
      {    
        path: "sugerir", component: TagSchoolComponent   
      },

      {
        path: '**',
        redirectTo: 'lista'
      }

    ]
  }



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
