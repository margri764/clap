import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeletePopupComponent } from './pages/deletePopup/delete-popup/delete-popup.component';
import { LogoutComponent } from './pages/logout/logout/logout.component';
import { SuggestionComponent } from './pages/suggestion/suggestion/suggestion.component';



const routes: Routes = [
  
    {
      path: 'eliminar', component: DeletePopupComponent 
    },
    {
      path: 'cerrar-sesion', component: LogoutComponent 
    },
    {
      path: 'invitar', component: SuggestionComponent
    },
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
