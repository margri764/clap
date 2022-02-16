import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-school-proposal',
  templateUrl: './card-school-proposal.component.html',
  styleUrls: ['./card-school-proposal.component.scss']
})
export class CardSchoolProposalComponent implements OnInit {

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
  
  