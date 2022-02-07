import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardJobCreatorComponent } from '../jobs/pages/cardJobCreator/card-job-creator/card-job-creator.component';


const routes : Routes =[


  // {
  //   path: "jobs", component: CardJobCreatorComponent
  // },
  // {
  //   path: "", redirectTo: "dashboard", pathMatch: 'full'
  // },
  // {
  //   path: 'page404',   component: Page404Component
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


