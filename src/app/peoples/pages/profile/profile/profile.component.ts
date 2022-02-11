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

  quantity:any;
  array: any []=[] 
  string:any;
  clicked:boolean= false;
  hidden: boolean = false;
  showSpinner : boolean = false;
    

  


  
  
  }
  


