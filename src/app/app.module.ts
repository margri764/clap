import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SharedModule } from './shared/shared.module';
import { JobsModule } from './jobs/jobs.module';
import { PeoplesModule } from './peoples/peoples.module';
import { BusinessModule } from './business/business.module';
import { SchoolModule } from './school/school.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    JobsModule,
    PeoplesModule,
    BusinessModule,
    SchoolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
