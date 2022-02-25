import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/interfaces/artist.interface';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { WorkExperienceComponent } from 'src/app/peoples/pages/workExperience/work-experience/work-experience.component';
import { ResumeComponent } from '../../resume/resume/resume.component';
import { EducationComponent } from '../../education/education/education.component';
import { MyIndustryComponent } from '../../myIndustry/my-industry/my-industry.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CardExperienceComponent } from '../../cardExperience/card-experience/card-experience.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

public graphic : boolean = false;
public photo : boolean = false;
public animation : boolean = false;

public userProfile!: Artist;
public edit : boolean = false;
public arrExperience :any = [];
public arrEducation :any = [];
public arrAbout :any = [];
public arrArtist : any =[];
private idArtist : string=JSON.parse(localStorage.getItem('token')!)



// get artists(){
  
//   return this.artistService.artists
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
              private activatedRoute: ActivatedRoute,
              private fb : FormBuilder,
              private cardExperience : CardExperienceComponent,
              private cdRef:ChangeDetectorRef,
  ) {
  
  }



  ngOnInit(): void {

    // this.idArtist=JSON.parse(localStorage.getItem('token')!)
  
    this.getExperience();
    this.getEducation();
    this.getAbout();
    this.getArtist( );



  }



  validField( field: string ) {

    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }
  sendForm(){
    alert(JSON.stringify(this.myForm.value))
    this.artistService.insertAboutInDB(this.myForm.value).subscribe(
      (res)=>{ if(res) alert('about agregada correctamente')}
    )
  }

 getArtist(){
   this.artistService.getDataArtist(this.idArtist).subscribe(
    ( {user} ) => { this.arrArtist= user }

   )
 } 

 getExperience(){
  this.artistService.getExperienceFromDB( this.idArtist).subscribe( 
    ( {experience} ) => { this.arrExperience= experience, console.log(this.arrExperience)}
  )        
  }

 getEducation(){
  this.artistService.getEducationFromDB( this.idArtist).subscribe(
    ( {education} ) => {this.arrEducation = education}
  )        
  }

  getAbout(){
    this.artistService.getAboutFromDB( this.idArtist).subscribe( 
      ( {about} ) => { this.arrAbout= about}
    )        
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
  


