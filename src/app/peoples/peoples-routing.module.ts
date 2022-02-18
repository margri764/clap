import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePeoplesComponent } from './pages/homePeoples/home-peoples.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { MyapplyComponent } from './pages/myapply/myapply/myapply.component';
import { SettingsComponent } from './pages/settings/settings/settings.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks/bookmarks.component';
import { IndustryComponent } from './pages/industry/industry/industry.component';


const routes: Routes = [
  {
    path: '',

    children: [
      {    
        path: "lista", component: HomePeoplesComponent   
      },
    
      {    
        path: "perfil/:id", component: ProfileComponent   
      },

      {    
        path: "mis-aplicaciones", component: MyapplyComponent 
      },

      {    
        path: "guardados", component: BookmarksComponent 
      },

      {    
        path: "ajustes", component: SettingsComponent 
      },

      {    
        path: "industrias", component: IndustryComponent
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
