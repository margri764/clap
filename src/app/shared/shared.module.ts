import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { FooterComponent } from './pages/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home/home.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
