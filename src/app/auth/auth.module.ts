import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material/material.module';

import { RegistrationComponent } from './pages/registration/registration/registration.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ConfirmEmailComponent } from './pages/confirmEmail/confirm-email.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ConfirmEmailComponent
  
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,

  ],
  exports:[
    LoginComponent,
    RegistrationComponent,
    ConfirmEmailComponent

  ]
})
export class AuthModule { }
