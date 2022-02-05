import { ThisReceiver } from '@angular/compiler';
import { AfterViewChecked, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardJobCreatorComponent } from '../../cardJobCreator/card-job-creator/card-job-creator.component';
import { CardJobProposalComponent } from '../../cardJobProposal/card-job-proposal/card-job-proposal.component';

@Component({
  selector: 'app-home-jobs',
  templateUrl: './home-jobs.component.html',
  styleUrls: ['./home-jobs.component.scss']
})
export class HomeJobsComponent implements OnInit {

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
            public dialog: MatDialog,  

  ) {   }




  ngOnInit(): void {

       this.getJobs();


  }

  getJobs(){
    // (this.showPeople = true) ? this.showPeople = false : this.showPeople= true;
    this.showJobs = true;
  }

  openDialogJob() {
    const dialogRef = this.dialog.open(CardJobProposalComponent, {
      panelClass:"custom-modalbox",
    });
  }
  openDialogJob2() {
    const dialogRef = this.dialog.open(CardJobCreatorComponent, {
      width: '800px',
      panelClass:"custom-modalbox",
    });
  }

}
