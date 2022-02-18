import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardUserComponent } from '../../card-user/card-user.component';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  constructor(
              private dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }


  openDialogCardUser() {
    const dialogRef = this.dialog.open(CardUserComponent, {
      width: '800px',
      panelClass:"custom-modalbox",
    });
  }
}
