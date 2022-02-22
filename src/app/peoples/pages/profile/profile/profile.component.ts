import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/interfaces/artist.interface';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { WorkExperienceComponent } from 'src/app/peoples/pages/workExperience/work-experience/work-experience.component';
import { ResumeComponent } from '../../resume/resume/resume.component';
import { EducationComponent } from '../../education/education/education.component';
import { IndustryComponent } from '../../industry/industry/industry.component';
import { MyIndustryComponent } from '../../myIndustry/my-industry/my-industry.component';

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
  constructor(
              private dialog : MatDialog,
              private artistService : ArtistService,
              private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .subscribe( ({id}) => {
      console.log(id);
      this.userProfile= this.artistService.artists
      // this.artistService.getDataArtist("testId")
      // .subscribe ( artist => {
      //   console.log(artist)
      // })
    } );




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
            this.graphic = false;
            this.photo = true;
            this.animation = false;

      break;

      case 'animation': 
            this.graphic = false;
            this.photo = false;
            this.animation = true;

      break;
     
  
    }
}


    

    
   btnPressedOut(){

            this.graphic = false;
            this.photo = false;
            this.animation = false;
    
  }

  


  
  
  }
  


