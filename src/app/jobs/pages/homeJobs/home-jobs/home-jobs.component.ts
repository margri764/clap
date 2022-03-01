import { ThisReceiver } from '@angular/compiler';
import { AfterViewChecked, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
public fullWidth = false;

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

modo: string[] = ['Virtual','Presencial'];
contract: string[] = ['Término indefenido','Prestación de servicios','Obra labor'];
salary: string[] = ['$200','$500'];

languages: string[] = ['Español','Inglés','Frances','Italiano','Ruso'];
states: string[] = [
  'Alabama',
  'Alaska',
  
];

myForm:FormGroup = this.fb.group({
  category:    ['', [Validators.required] ],



});


  constructor(
            public dialog: MatDialog,  
            private fb : FormBuilder,


  ) {   }

  sendForm(){
   alert(JSON.stringify(this.myForm.value));

  }




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
      // panelClass:"custom-modalbox",

    });
  }

  openDialogJob2() {
    const dialogRef = this.dialog.open(CardJobCreatorComponent, {
      width: '800px',
      panelClass:"custom-modalbox",
    });
  }

}
