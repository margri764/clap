import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home/home.component';
import { Page404Component } from './shared/pages/page404/page404/page404.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
  },
 
  {
    path: 'page404',   component: Page404Component
  },
  {
    path: '**',
    redirectTo: 'Page404'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
