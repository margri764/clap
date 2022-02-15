import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostExperienceComponent } from './pages/postExperience/post-experience/post-experience.component';


const routes : Routes =[


  
  {
    path: 'publicacion',   component: PostExperienceComponent
  },

  // {
  //   path: "", redirectTo: "dashboard", pathMatch: 'full'
  // },

  // {
  //   path: '**',
  //   redirectTo: 'Page404'
  // }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild ( routes )
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }


