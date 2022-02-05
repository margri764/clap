import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EducationComponent } from 'src/app/shared/pages/education/education/education.component';
import { WorkExperienceComponent } from 'src/app/shared/pages/workExperience/work-experience/work-experience.component';
import { CardUserComponent } from '../card-user/card-user.component';

@Component({
  selector: 'app-home-peoples',
  templateUrl: './home-peoples.component.html',
  styleUrls: ['./home-peoples.component.scss']
})
export class HomePeoplesComponent implements OnInit {

  heroes =[
    {
      nombre: "marcelo"
    },
    {
      nombre: "fenando"
    },
    {
      nombre: "juan"
    }
  ]

  public showPeople: boolean =false;

  constructor(
              private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples(){
    this.showPeople= true;
  }
  openDialog() {
    const dialogRef = this.dialog.open(CardUserComponent, {
      width: '800px',
      panelClass:"custom-modalbox",
    });
  }

  openDialogEducation() {
    const dialogRef = this.dialog.open(EducationComponent, {
      width: '800px',
      panelClass:"custom-modalbox",
    });
  }

  openDialogWork() {
    const dialogRef = this.dialog.open(WorkExperienceComponent, {
      width: '800px',
      panelClass:"custom-modalbox",
    });
  }

}
