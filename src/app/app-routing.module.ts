import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/pages/dashboard/dashboard/dashboard.component';
import { Page404Component } from './shared/pages/page404/page404/page404.component';

const routes: Routes = [
  {
    path: "", redirectTo: "dashboard", pathMatch: 'full'
  },
  {
    path: "dashboard", component: DashboardComponent
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