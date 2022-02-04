import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { CardUserComponent } from '../../../../peoples/pages/card-user/card-user.component';
import { WorkExperienceComponent } from '../../workExperience/work-experience/work-experience.component';
import { EducationComponent } from '../../education/education/education.component';
import { CardJobCreatorComponent } from 'src/app/jobs/pages/cardJobCreator/card-job-creator/card-job-creator.component';
import { HomeJobsComponent } from 'src/app/jobs/pages/homeJobs/home-jobs/home-jobs.component';
import { HomePeoplesComponent } from 'src/app/peoples/pages/homePeoples/home-peoples.component';

export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewChecked   {
  
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  
  public showPeople : boolean = false;

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

  constructor(
              public dialog: MatDialog,  
              private compJobs : HomeJobsComponent,
              private compPeoples : HomePeoplesComponent,
              private cdRef:ChangeDetectorRef
              
              ) {
 
  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
    this.styleObject();

  }
styleObject() {

  if(window.location.pathname.includes('empleos')){ 

     return  { "background":"#e961aa" }
  };
  if(window.location.pathname.includes('personas')){ 

    return  { "background":"#61a7e9" }
 }
  return {}


}  

getPeople(){
  // (this.showJobs = true) ? this.showJobs = false : this.showJobs= true;
  // this.showPeople = !this.showPeople;
  this.compPeoples.getPeoples()
}

getJobs(){
  this.compJobs.getJobs();

  
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


