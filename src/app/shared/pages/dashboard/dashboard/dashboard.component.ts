import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { CardUserComponent } from '../../cardUser/card-user/card-user.component';
import { WorkExperienceComponent } from '../../workExperience/work-experience/work-experience.component';
import { EducationComponent } from '../../education/education/education.component';
import { CardJobCreatorComponent } from 'src/app/jobs/pages/cardJobCreator/card-job-creator/card-job-creator.component';

export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  public showPeople : boolean = false;
  public showJobs : boolean = false;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  constructor(public dialog: MatDialog) {
 
  }

getPeople(){
  (this.showJobs = true) ? this.showJobs = false : this.showJobs= true;
  this.showPeople = !this.showPeople;
}

getJobs(){
  (this.showPeople = true) ? this.showPeople = false : this.showPeople= true;
  this.showJobs = !this.showJobs;
}

  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(CardUserComponent, {
      width: '800px',
      panelClass:"custom",
    });
  }

  openDialogExperience() {
    const dialogRef = this.dialog.open(WorkExperienceComponent, {
      width: '800px',
      panelClass:"custom",
    });
  
  }

  openDialogEducation() {    
    const dialogRef = this.dialog.open(EducationComponent, {
      width: '800px',
      panelClass:"custom",
    });  
  }

openDialogJob(){
  const dialogRef = this.dialog.open(CardJobCreatorComponent, {
    width: '800px',
    panelClass:"custom",
  });  

}

 
}


