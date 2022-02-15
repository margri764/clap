import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePopupComponent } from './pages/deletePopup/delete-popup/delete-popup.component';
import { MaterialModule } from '../material/material/material.module';
import { MessagesRoutingModule } from './messages-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './pages/logout/logout/logout.component';
import { SuggestionComponent } from './pages/suggestion/suggestion/suggestion.component';



@NgModule({
  declarations: [
    DeletePopupComponent,
    LogoutComponent,
    SuggestionComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports:[
    DeletePopupComponent,
    LogoutComponent,
    SuggestionComponent


  ]
})
export class MessagesModule { }
