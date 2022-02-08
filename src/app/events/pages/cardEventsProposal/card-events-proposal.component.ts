import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-events-proposal',
  templateUrl: './card-events-proposal.component.html',
  styleUrls: ['./card-events-proposal.component.scss']
})
export class CardEventsProposalComponent implements OnInit {

  public showFiller : boolean = true;
  public push : boolean= false;
  public clicked : boolean = false;
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  
    test(){
      this.clicked= !this.clicked;
    }
    test2(){
      this.push= !this.push;
    }
  }
  