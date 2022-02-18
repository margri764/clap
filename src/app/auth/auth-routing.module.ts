import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistrationComponent } from './pages/registration/registration/registration.component';
import { ConfirmEmailComponent } from './pages/confirmEmail/confirm-email.component';


const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistrationComponent
      },
      {
        path: 'confirmacion',
        component: ConfirmEmailComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
