import {  ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';
moment.locale('es');

import { MatDialog } from '@angular/material/dialog';

import { ResumeComponent } from '../../resume/resume/resume.component';
import { MyIndustryComponent } from '../../myIndustry/my-industry/my-industry.component';
import { WorkExperienceComponent } from 'src/app/peoples/pages/workExperience/work-experience/work-experience.component';
import { CardExperienceComponent } from '../../cardExperience/card-experience/card-experience.component';
import { EducationComponent } from '../../education/education/education.component';
import { LoginService } from 'src/app/services/login/login.service';
import { Artist } from 'src/app/interfaces/artist.interface';


import { ArtistService } from 'src/app/services/artist/artist.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges {


public graphic : boolean = false;
public photo : boolean = false;
public animation : boolean = false;

public userProfile!: Artist;
public edit : boolean = false;
public arrExperience :any = [];
public arrEducation :any = [];
public arrAbout :any = [];
public arrArtist : any =[];
public hideAbout : boolean= false;
public idArtist : string='';
public seniorityDate! : number;
public artist : Artist={};



// get artist(){
//   return this.artistService.getArtist;
// }

  heroeHeader =[
    {
      nombre: "marcelo"
    }
  ]

  heroes =[
    {
      nombre: "marcelo"
    },
    {
      nombre: "marcelo"
    },
    {
      nombre: "marcelo"
    },
    {
      nombre: "marcelo"
    }
  ]

  myForm:FormGroup = this.fb.group({
    about:    ['', [Validators.required] ],
    id: [this.idArtist] 
  
  });

  constructor(
              private dialog : MatDialog,
              private artistService : ArtistService,
              private loginService : LoginService,
              private route : Router,
              private activatedRoute: ActivatedRoute,
              private fb : FormBuilder,
              private cardExperience : CardExperienceComponent,
              private cdRef:ChangeDetectorRef,
  ) {
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  seniority(){
    const actualDay = moment();
    const jobDate= moment(this.artistService.getArtist.jobDate);
   
    this.seniorityDate=actualDay.diff(jobDate, 'years');


  }



  ngOnInit(): void {
    
    this.getArtist( );

  }

  
hidAbout(){
  this.hideAbout=!this.hideAbout

}

  validField( field: string ) {

    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }
  sendForm(){
    alert(JSON.stringify(this.myForm.value))
    // this.artistService.insertAboutInDB(this.myForm.value).subscribe(
    //   ()=>{ this.getAbout()}
    // )
  }

 getArtist(){

  
  this.artistService.getDataArtist(this.loginService.user.id!).subscribe(
    (success)=>{ if(success){
                this.artist = this.artistService.artist;
              this.seniority();
            }
    })
 } 

 getExperience(){
  // this.artistService.getExperienceFromDB( this.idArtist).subscribe( 
  //   ( {experience} ) => { this.arrExperience= experience}
  // )        
  }

 getEducation(){
  // this.artistService.getEducationFromDB( this.idArtist).subscribe(
  //   ( {education} ) => {this.arrEducation = education}
  // )        
  }

  getAbout(){
    // this.artistService.getAboutFromDB( this.idArtist).subscribe( 
    //   ( {about} ) => { this.arrAbout= about; }
    // )        
    }

  openDialog() {
    const dialogRef = this.dialog.open(ResumeComponent, {
      width: '800px',

      panelClass:"custom-modalbox-opacity",
      // scrollStrategy: new NoopScrollStrategy()
    });
  }

  openDialogIndustries() {
    const dialogRef = this.dialog.open(MyIndustryComponent, {
      width: '800px',

      panelClass:"custom-modalbox-opacity",
      // scrollStrategy: new NoopScrollStrategy()
    });
  }

  openDialogExperience() {
    const dialogRef = this.dialog.open(WorkExperienceComponent, {
      width: '800px',

      panelClass:"custom-modalbox-opacity",
      // scrollStrategy: new NoopScrollStrategy()
    });
  }

  openDialogEducation() {
    const dialogRef = this.dialog.open(EducationComponent, {
      width: '800px',

      panelClass:"custom-modalbox-opacity",
      // scrollStrategy: new NoopScrollStrategy()
    });
  }

   btnPressed(pressed : string){
    
    switch( pressed ){ 
      case 'graphic' :
            this.graphic = true;
            this.photo = false;
            this.animation = false;
      break;
      
      case 'photo': 
            this.photo = true;
            this.graphic = false;
            this.animation = false;
      break;

      case 'animation': 
            this.animation = true;
            this.graphic = false;
            this.photo = false;
      break;
  
    }
}
   btnPressedOut(){
            this.graphic = false;
            this.photo = false;
            this.animation = false;
    
  }

  
  }
  


