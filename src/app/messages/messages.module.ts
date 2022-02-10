import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePopupComponent } from './pages/deletePopup/delete-popup/delete-popup.component';
import { MaterialModule } from '../material/material/material.module';
import { MessagesRoutingModule } from './messages-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DeletePopupComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports:[
    DeletePopupComponent

  ]
})
export class MessagesModule { }
