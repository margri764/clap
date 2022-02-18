import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';



import { SharedModule } from './shared/shared.module';
import { JobsModule } from './jobs/jobs.module';
import { BusinessModule } from './business/business.module';
import { EventsModule } from './events/events.module';
import { CompetitionModule } from './competition/competition.module';
import { MessagesModule } from './messages/messages.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';


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
    BusinessModule,
    EventsModule,
    CompetitionModule,
    MessagesModule,
    SocialLoginModule

  ],
  providers: [{
    provide: MAT_DATE_LOCALE, useValue: 'en-GB'
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "733943695962-4u1jhq7se907uer2ld12m9huk2cteqam.apps.googleusercontent.com"
              //  "272254821345-bbi0n5pspb5gj5cu708thanfm0mdg4j3.apps.googleusercontent.com"
            )
          },
                    // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('clientId')
          // }
        ]
      } as SocialAuthServiceConfig,
    },


    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
