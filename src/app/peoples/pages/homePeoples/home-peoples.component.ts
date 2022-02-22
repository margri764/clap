import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardUserComponent } from '../card-user/card-user.component';

@Component({
  selector: 'app-home-peoples',
  templateUrl: './home-peoples.component.html',
  styleUrls: ['./home-peoples.component.scss']
})
export class HomePeoplesComponent implements OnInit {

  heroes =[
    {
      nombre: "Santiago Reyes"
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
    const dialogRef = this.dialog.open(CardUserComponent, {
      width: '800px',
      panelClass:"custom-modalbox",
    });
  }





  
}
