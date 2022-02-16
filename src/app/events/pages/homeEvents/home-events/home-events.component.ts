import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardEventsProposalComponent } from 'src/app/events/pages/cardEventsProposal/card-events-proposal.component';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.scss']
})
export class HomeEventsComponent implements OnInit {

public showEvents : boolean = false;
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
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];



  constructor(
            public dialog: MatDialog,  

  ) {   }




  ngOnInit(): void {

       this.getEvents();


  }

  getEvents(){
    // (this.showPeople = true) ? this.showPeople = false : this.showPeople= true;
    this.showEvents = true;
  }

  openDialogEvents() {
    const dialogRef = this.dialog.open(CardEventsProposalComponent, {
      panelClass:"custom-modalbox",
    });
  }



}
