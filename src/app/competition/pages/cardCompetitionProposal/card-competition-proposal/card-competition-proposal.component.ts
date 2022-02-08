import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-competition-proposal',
  templateUrl: './card-competition-proposal.component.html',
  styleUrls: ['./card-competition-proposal.component.scss']
})
export class CardCompetitionProposalComponent implements OnInit {

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
  