import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';



import { CardUserComponent } from '../../../../peoples/pages/card-user/card-user.component';
import { CardJobCreatorComponent } from 'src/app/jobs/pages/cardJobCreator/card-job-creator/card-job-creator.component';
import { HomeJobsComponent } from 'src/app/jobs/pages/homeJobs/home-jobs/home-jobs.component';
import { HomeBusinessComponent } from 'src/app/business/pages/homeBusiness/home-business/home-business.component';
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
  public showProfileBookmarksDashboard : boolean = true;
  user!: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;






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
              private cdRef:ChangeDetectorRef,
              private authService: SocialAuthService,

              
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
    this.showProfileBookmarksDashboard= false;


   
 }

  if(window.location.pathname.includes('empleos')){ 

    this.showMainDashboard = true;
    this.showProfileDashboard = false;
    this.showProfileBookmarksDashboard= false;

     return  { "background":"#fface0" }
  };

  if(window.location.pathname.includes('artistas/lista')){ 
    this.showMainDashboard = true;
    this.showProfileDashboard = false;
    this.showProfileBookmarksDashboard= false;


    return  { "background":"#b0bcec" }
 }

 if(window.location.pathname.includes('artistas/mis-aplicaciones')){ 
  this.showMainDashboard = false;
  this.showProfileDashboard = true;
  this.showProfileBookmarksDashboard= false;

  return  { "background":"#fface0" }
}

if(window.location.pathname.includes('artistas/ajustes')){ 
  this.showMainDashboard = false;
  this.showProfileDashboard = false;
  this.showProfileBookmarksDashboard= false;
  
}

if(window.location.pathname.includes('artistas/guardados')){ 
  this.showMainDashboard = false;
  this.showProfileDashboard = false;
  this.showProfileBookmarksDashboard= true
  
}



if(window.location.pathname.includes('empresas')){ 
  this.showMainDashboard = true;
  this.showProfileDashboard = false;
  this.showProfileBookmarksDashboard= false;

  return  { "background":"#aae8b9"}
}

if(window.location.pathname.includes('escuelas')){ 
  this.showMainDashboard = true;
  this.showProfileDashboard = false;
  this.showProfileBookmarksDashboard= false;

  return  { "background":"#ffa076"}
}

if(window.location.pathname.includes('eventos')){ 
  this.showMainDashboard = true;
  this.showProfileDashboard = false;
  this.showProfileBookmarksDashboard= false;

  return  { "background":"#fff1b9"}
}

if(window.location.pathname.includes('concursos')){ 
  this.showMainDashboard = true;
  this.showProfileBookmarksDashboard= false;
  this.showProfileDashboard = false;

  return  { "background":"#B29DD5"}
}

if(window.location.pathname.includes('artistas/perfil')){ 
  
  this.showMainDashboard = false;
  this.showProfileDashboard = true;
  this.showProfileBookmarksDashboard= false;


  return  { "background":"#b0bcec"}
}

if(window.location.pathname.includes('gestion-aplicantes')){ 
  
  this.showMainDashboard = true;
  this.showProfileDashboard = false;
  this.showProfileBookmarksDashboard= false;
 
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
    this.authService.authState.subscribe(user => {
      this.user = user;

      
    //   if(user!=null){
    //     const {idToken} = user
    //     this.employeeService.userLogin={
    //       // name,
    //       // email
    //       idToken
    //   }
 

    // } 
    });


  }

  openDialog() {
    const dialogRef = this.dialog.open(CardUserComponent, {
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


