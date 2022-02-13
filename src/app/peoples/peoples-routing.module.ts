import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePeoplesComponent } from './pages/homePeoples/home-peoples.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { MyapplyComponent } from './pages/myapply/myapply/myapply.component';


const routes: Routes = [
  {
    path: '',

    children: [
      {    
        path: "lista", component: HomePeoplesComponent   
      },
    
      {    
        path: "perfil", component: ProfileComponent   
      },

      {    
        path: "mis-aplicaciones", component: MyapplyComponent 
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
export class PeoplesRoutingModule { }
