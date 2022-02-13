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
import { HomeBusinessComponent } from 'src/app/business/pages/homeBusiness/home-business/home-business.component';
// import { HomeSchoolComponent } from 'src/app/school/pages/homeSchool/home-school/home-school.component';
import { HomeEventsComponent } from 'src/app/events/pages/homeEvents/home-events/home-events.component';
import { HomeCompetitionComponent } from 'src/app/competition/pages/homeCompetition/home-competition/home-competition.component';

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
  public showMainDashboard : boolean = true;
  public showProfileDashboard : boolean = true;


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
              private compJob : HomeJobsComponent,
              // private compPeople : HomePeoplesComponent,
              private compBusiness : HomeBusinessComponent,
              // private compSchool : HomeSchoolComponent,
              private compEvent : HomeEventsComponent,
              private compCompetition : HomeCompetitionComponent,
              private cdRef:ChangeDetectorRef
              
              ) {
 
  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
    this.styleObject();

  }
styleObject() {

  if(window.location.pathname.includes('home')){ 
    this.showMainDashboard = true;
    this.showProfileDashboard = false;

   
 }

  if(window.location.pathname.includes('empleos')){ 

     return  { "background":"#fface0" }
  };

  if(window.location.pathname.includes('artistas/lista')){ 
    this.showMainDashboard = true;
    this.showProfileDashboard = false;

    return  { "background":"#b0bcec" }
 }

 if(window.location.pathname.includes('artistas/mis-aplicaciones')){ 
  this.showMainDashboard = false;
  this.showProfileDashboard = true;

  return  { "background":"#fface0" }
}

 if(window.location.pathname.includes('empresas')){ 
  this.showMainDashboard = true;
  this.showProfileDashboard = false;

  return  { "background":"#7ff36a"}
}

if(window.location.pathname.includes('escuelas')){ 
  this.showMainDashboard = true;
  this.showProfileDashboard = false;

  return  { "background":"#FF8066"}
}

if(window.location.pathname.includes('eventos')){ 
  this.showMainDashboard = true;
  this.showProfileDashboard = false;

  return  { "background":"#fff1b9"}
}

if(window.location.pathname.includes('concursos')){ 
  this.showMainDashboard = true;
  this.showProfileDashboard = false;

  return  { "background":"#B29DD5"}
}

if(window.location.pathname.includes('artistas/perfil')){ 
  
  this.showMainDashboard = false;
  this.showProfileDashboard = true;

  return  { "background":"#b0bcec"}
}

  return {}


}  

getPeople(){
  // (this.showJobs = true) ? this.showJobs = false : this.showJobs= true;
  // this.showPeople = !this.showPeople;
  // this.compPeople.getPeoples()
}

getJobs(){
  this.compJob.getJobs();  
}

getBusiness(){
  this.compBusiness.getBusiness();  
}



getEvents(){
  this.compEvent.getEvents();
}

getCompetitions(){
  this.compCompetition.getCompetitions();
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


