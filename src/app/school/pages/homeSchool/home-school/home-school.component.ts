import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-school',
  templateUrl: './home-school.component.html',
  styleUrls: ['./home-school.component.scss']
})
export class HomeSchoolComponent implements OnInit {

  heroes =[
    {
      nombre: "marcelo"
    },
    {
      nombre: "fenando"
    },
    {
      nombre: "juan"
    }
  ]

  public showPeople: boolean =false;

  constructor(
              private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples(){
    this.showPeople= true;
  }
  openDialog() {
    // const dialogRef = this.dialog.open(CardUserComponent, {
    //   width: '800px',
    //   panelClass:"custom-modalbox",
    // });
  }

  

}
