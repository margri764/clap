import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-business-proposal',
  templateUrl: './card-business-proposal.component.html',
  styleUrls: ['./card-business-proposal.component.scss']
})
export class CardBusinessProposalComponent implements OnInit {

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

