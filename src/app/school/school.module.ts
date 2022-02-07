import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolRoutingModule } from './school-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeSchoolComponent } from './pages/homeSchool/home-school/home-school.component';



@NgModule({
  declarations: [
    HomeSchoolComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports:[
    HomeSchoolComponent

  ],
  providers:[ HomeSchoolComponent]
})
export class SchoolModule { }
