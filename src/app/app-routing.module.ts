import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home/home.component';
import { Page404Component } from './shared/pages/page404/page404/page404.component';
import { RevalidateTokenGuardGuard } from './guards/revalidate-token-guard.guard';

const routes: Routes = [
  
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'artistas',
    loadChildren: () => import('./peoples/peoples.module').then( m => m.PeoplesModule ),
    canActivate: [RevalidateTokenGuardGuard ],
    canLoad: [RevalidateTokenGuardGuard ],
  },
  
  {
    path: 'escuelas',
    loadChildren: () => import('./school/school.module').then( m => m.SchoolModule )
  },
  
  {
    path: 'page404',   component: Page404Component
  },

  {
    path: "home", component: HomeComponent
  },
    {
    path: "", redirectTo: "home", pathMatch: 'full'
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
