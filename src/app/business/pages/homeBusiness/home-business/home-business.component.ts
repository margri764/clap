import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardBusinessProposalComponent } from '../../cardBussinesProposal/card-business-proposal/card-business-proposal.component';

@Component({
  selector: 'app-home-business',
  templateUrl: './home-business.component.html',
  styleUrls: ['./home-business.component.scss']
})
export class HomeBusinessComponent implements OnInit {

public showJobs : boolean = false;

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

  constructor(

              private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getBusiness();
  }

  getBusiness(){
    // (this.showPeople = true) ? this.showPeople = false : this.showPeople= true;
    this.showJobs = true;
  }

  openDialogBusiness() {
    const dialogRef = this.dialog.open(CardBusinessProposalComponent, {
      panelClass:"custom-modalbox",
    });
  }

  }



