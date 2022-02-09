import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { SharedModule } from './shared/shared.module';
import { JobsModule } from './jobs/jobs.module';
import { PeoplesModule } from './peoples/peoples.module';
import { BusinessModule } from './business/business.module';
import { EventsModule } from './events/events.module';
import { CompetitionModule } from './competition/competition.module';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    JobsModule,
    PeoplesModule,
    BusinessModule,
    // SchoolModule,
    EventsModule,
    CompetitionModule,
    // AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
