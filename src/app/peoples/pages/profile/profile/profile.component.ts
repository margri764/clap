import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeComponent } from '../../resume/resume/resume.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

public graphic : boolean = false;
public photo : boolean = false;
public animation : boolean = false;

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
              private dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ResumeComponent, {
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
  

