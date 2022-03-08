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
import { Artist, User } from 'src/app/interfaces/artist.interface';


import { ArtistService } from 'src/app/services/artist/artist.service';
import { CardUserComponent } from '../../card-user/card-user.component';


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
public seniorityDate! : number;
public artist : User={};
public idArtist: string = '';
private emailArtist: string= '';

private arrLanguaje : any []=[];

public spanish : boolean = false;
public english : boolean = false;
public italian : boolean = false;
public illustrator : boolean = false;
public sketchup : boolean = false;
public gimp : boolean = false;
public programming : boolean = false;
public cloudComputing : boolean = false;
public blockchain : boolean = false;

private modalHeight : string = '';
private modalHeightExperience : string = '';



//solo para pruebas sin back
public api : any=[];






get artistLogin(){
  this.idArtist!= this._loginservice.user;
  return this._loginservice.user;
}

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
    // about:    ['', [Validators.required] ],
    // id: [this.idArtist] 
  
  });

  myFormSkill:FormGroup = this.fb.group({});
  myFormLanguaje:FormGroup = this.fb.group({});
  myFormSoftware:FormGroup = this.fb.group({});

  constructor(
              private dialog : MatDialog,
              private _artistservice : ArtistService,
              private _loginservice : LoginService,
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
    const jobDate= moment(this._artistservice.getArtist.jobDate);
   
    this.seniorityDate=actualDay.diff(jobDate, 'years');


  }
  randomApi(){

    fetch('https://randomuser.me/api')
    .then(res =>res.json())
    .then(data =>{this.api.push(data.results['0']);
              
          })
    }
    // whoAmI(){
    //   this._loginservice.whoAmI().subscribe(
    //     (res:any) => {
    //           if(res){
    //          this.artist=res
    //          console.log(this.artist)
    //     }
    //   }
    //   )
    // }

    getUserById(){
      this._artistservice.getDataArtist(this.idArtist).subscribe(
        res=> console.log(res)
      )
    }

  ngOnInit(): void {
    this.randomApi();
    // this.whoAmI();
    this.getUserById();
    

    if(screen.width <= 1280) { this.modalHeightExperience='600px'};
    if(screen.width > 1300) { this.modalHeightExperience='600px'} ;

    // (screen.width <= 1280) ? this.modalHeightExperience='600px' : this.modalHeightExperience='800px';
    // (screen.width >= 1281) ? this.modalHeightExperience='800px' : this.modalHeightExperience='800';


    
    // (screen.width < 1280) ? this.modalHeight='600px' : this.modalHeight='700px' 
    
    // this.getArtist( );

  }

  
hidAbout(){
  this.hideAbout=!this.hideAbout

}

  // validField( field: string ) {

  //   return this.myForm.controls[field].errors 
  //           && this.myForm.controls[field].touched;
  // }
  sendForm(){
    // alert(JSON.stringify(this.myForm.value))
    // this._artistservice.insertAboutInDB(this.myForm.value).subscribe(
    //   ()=>{ this.getAbout()}
    // )
  }

  sendFormSkill(){
    alert(JSON.stringify(this.myFormSkill.value))
   }

  sendFormSoftware(){
    alert(JSON.stringify(this.myFormSoftware.value))
  }

  sendFormLanguaje(){
    alert(JSON.stringify(this.myFormLanguaje.value))
  }


 //con este metodo cambio los colores de las 
  selectSkill( value:string) {

        
    
        // this.arrLanguaje.push(value)
        // this.myForm2.addControl('test', this.fb.control(this.arrLanguaje, Validators.required));

    switch(value){
      
      case 'español':
        this.spanish=!this.spanish; 
      break

      case 'ingles':
      this.english= !this.english;
      break

      case 'italiano':
        this.italian=!this.italian;
      break  

      case 'Adobe Illustrator':
        this.illustrator=!this.illustrator;  
      break

      case 'Google Sketchup':
        this.sketchup =!this.sketchup;
      break  

      case 'Gimp':
        this.gimp=!this.gimp;
      break

      case 'Programación':
        this.programming=!this.programming;
        break

      case 'Cloud Computing':
        this.cloudComputing=!this.cloudComputing;
        break
      
      case 'Blockchain':
        this.blockchain=!this.blockchain;
        break
    }
  }


 getArtist(){

  
  // this._artistservice.getDataArtist(this._loginservice.user.id!).subscribe(
  //   (success)=>{ if(success){
  //               this.artist = this._artistservice.artist;
  //             this.seniority();
  //           }
  //   })
 } 

 getExperience(){
  // this._artistservice.getExperienceFromDB( this.idArtist).subscribe( 
  //   ( {experience} ) => { this.arrExperience= experience}
  // )        
  }

 getEducation(){
  // this._artistservice.getEducationFromDB( this.idArtist).subscribe(
  //   ( {education} ) => {this.arrEducation = education}
  // )        
  }

  getAbout(){
    // this._artistservice.getAboutFromDB( this.idArtist).subscribe( 
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



  openDialogCardUser() {
    const dialogRef = this.dialog.open(CardUserComponent, {
      maxHeight:'90vh',
      height:this.modalHeight,
      panelClass:"custom-modalbox-user",
    });
  }



  openDialogIndustries() {
      this.dialog.open(MyIndustryComponent, {
      maxHeight:'90vh',
      height: this.modalHeight,
      panelClass:"custom-modalbox-industries",
              
      // scrollStrategy: new NoopScrollStrategy()
    });
  }

  openDialogExperience() {
     this.dialog.open(WorkExperienceComponent, {
      panelClass:"custom-modalbox-experience",
      maxHeight:'90vh',
      height: this.modalHeightExperience
      // scrollStrategy: new NoopScrollStrategy()
    });
  }

  openDialogEducation() {
    const dialogRef = this.dialog.open(EducationComponent, {

      panelClass:"custom-modalbox-education",
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
  


