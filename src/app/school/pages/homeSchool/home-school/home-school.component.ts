import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardSchoolProposalComponent } from '../../cardSchoolProposal/card-school-proposal/card-school-proposal.component';

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
  openDialogSchool() {
    const dialogRef = this.dialog.open(CardSchoolProposalComponent, {
      width: '800px',
      panelClass:"custom-modalbox",
    });
  }

  

}
