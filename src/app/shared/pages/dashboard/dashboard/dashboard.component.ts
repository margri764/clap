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
import { ThisReceiver } from '@angular/compiler';
import { LoginService } from 'src/app/services/login/login.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewChecked   {
  

  
  public showPeople : boolean = false;
  public showMainDashboard : boolean = true;
  public showProfileDashboard : boolean = false;
  public showMenuProfile : boolean = false;
  public showNoLogginDashboard : boolean = false;
  public userLogin : boolean = false;

  // public showProfileBookmarksDashboard : boolean = true;
  user!: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;

  get dataUser(){
    return this._loginservice.dataUser;
  }







  constructor(
              public dialog: MatDialog,  
              private compJob : HomeJobsComponent,
              private _loginservice : LoginService,
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
    
    this.showMenuProfile=false;
    if(localStorage.getItem('token') != undefined){
      this.showProfileDashboard = true;
      this.showMainDashboard = true;
      this.showNoLogginDashboard=false;
      this.userLogin=true;


    }else{  this.showNoLogginDashboard=true }
  
  }
  
  if(window.location.pathname.includes('empleos')){ 
    
    this.showMenuProfile=false;
    if(localStorage.getItem('token')){
      this.showProfileDashboard = true;
      this.showMainDashboard = true;
      this.showNoLogginDashboard=false      
    }else{  this.showNoLogginDashboard=true }
    
    return  { "background":"#fface0" }
  };
  
  if(window.location.pathname.includes('empresas')){ 
    
    this.showMenuProfile=false;
    if(localStorage.getItem('token')){
      this.showProfileDashboard = true;
      this.showMainDashboard = true;
      this.showNoLogginDashboard=false      
    }else{  this.showNoLogginDashboard=true }
    
    return  { "background":"#aae8b9"}
  }
  if(window.location.pathname.includes('escuelas')){ 
    
    this.showMenuProfile=false;
    if(localStorage.getItem('token')){
      this.showProfileDashboard = true;
      this.showMainDashboard = true;
      this.showNoLogginDashboard=false      
    }else{  this.showNoLogginDashboard=true }
    
    return  { "background":"#ffa076"}
  }
  if(window.location.pathname.includes('eventos')){ 
  
    this.showMenuProfile=false;
    if(localStorage.getItem('token')){
      this.showProfileDashboard = true;
      this.showMainDashboard = true;
      this.showNoLogginDashboard=false      
    }else{  this.showNoLogginDashboard=true }
    
    return  { "background":"#fff1b9"}
  }
  
  if(window.location.pathname.includes('concursos')){ 
  
    this.showMenuProfile=false;
    if(localStorage.getItem('token')){
      this.showProfileDashboard = true;
      this.showMainDashboard = true;
      this.showNoLogginDashboard=false      
    }else{  this.showNoLogginDashboard=true }
  
    return  { "background":"#B29DD5"}
  }

  if(window.location.pathname.includes('artistas/lista')){ 
    this.showMenuProfile=false;
    if(localStorage.getItem('token')){
      this.showProfileDashboard = true;
      this.showMainDashboard = true;
      this.showNoLogginDashboard=false      
    }else{  this.showNoLogginDashboard=true }


    return  { "background":"#b0bcec" }
 }

 if(window.location.pathname.includes('artistas/mis-aplicaciones')){ 
    this.showMenuProfile=true;
    if(localStorage.getItem('token')){
      this.showProfileDashboard = true;
      this.showMainDashboard = false;
      this.showNoLogginDashboard= false     
    }else{  this.showNoLogginDashboard= false}

  return  { "background":"#fface0" }
}

if(window.location.pathname.includes('artistas/ajustes')){ 
  this.showMenuProfile=false;
  this.showMainDashboard = false;
  this.showProfileDashboard = true;

  // this.showProfileBookmarksDashboard= false;
  
}

if(window.location.pathname.includes('artistas/guardados')){ 
  this.showMainDashboard = false;
  this.showProfileDashboard = false;
  // this.showProfileBookmarksDashboard= true
  
}


if(window.location.pathname.includes('artistas/perfil')){ 
  
  this.showMainDashboard = false;
  this.showProfileDashboard = true;
  // this.showProfileBookmarksDashboard= false;


  return  { "background":"#b0bcec"}
}

if(window.location.pathname.includes('gestion-aplicantes')){ 
  
  this.showMainDashboard = true;
  this.showProfileDashboard = false;
  // this.showProfileBookmarksDashboard= false;
 
}


  return {}


}  

whoAmI(){
  this._loginservice.whoAmI().subscribe( res => console.log(this._loginservice.user))
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





  openDialogJob(){
    const dialogRef = this.dialog.open(CardJobCreatorComponent, {
      width: '800px',
      panelClass:"custom",
    });  

}

 
}


