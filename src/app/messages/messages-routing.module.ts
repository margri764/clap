import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeletePopupComponent } from './pages/deletePopup/delete-popup/delete-popup.component';



const routes: Routes = [
  
    {
      path: 'eliminar', component: DeletePopupComponent 
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
export class MessagesRoutingModule { }
