import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardUserComponent } from '../../card-user/card-user.component';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  private modalHeight :string='';
  constructor(
              private dialog : MatDialog
  ) { }

  ngOnInit(): void {

    (screen.width < 1280) ? this.modalHeight='600' : this.modalHeight='700' 
  }


  openDialogCardUser() {
    const dialogRef = this.dialog.open(CardUserComponent, {
      maxHeight:'90vh',
      height:this.modalHeight,
      panelClass:"custom-modalbox-user",
    });
  }
}
