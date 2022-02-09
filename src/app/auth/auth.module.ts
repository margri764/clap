import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './pages/registration/registration/registration.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  
    
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

  ]
})
export class AuthModule { }
