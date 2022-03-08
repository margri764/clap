import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletePopupComponent } from './pages/deletePopup/delete-popup/delete-popup.component';
import { LogoutComponent } from './pages/logout/logout/logout.component';
import { SuggestionComponent } from './pages/suggestion/suggestion/suggestion.component';
import { WelcomeComponent } from './pages/welcome/welcome/welcome.component';



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

    {
      path: 'confirmar/emailKey/:token', component: WelcomeComponent
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
