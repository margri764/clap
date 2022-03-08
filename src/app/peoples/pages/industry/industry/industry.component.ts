import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login/login.service';
import { CardUserComponent } from '../../card-user/card-user.component';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  private modalHeight :string='';
  constructor(
              private dialog : MatDialog,
              private _loginservice : LoginService
  ) { }

  whoAmI(){
    this._loginservice.whoAmI().subscribe()
  }

  ngOnInit(): void {
this.whoAmI();
    (screen.width < 1280) ? this.modalHeight='600px' : this.modalHeight='700px' 
  }


  openDialogCardUser() {
    const dialogRef = this.dialog.open(CardUserComponent, {
      maxHeight:'90vh',
      height:this.modalHeight,
      panelClass:"custom-modalbox-user",
    });
  }
}
