import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-job-proposal',
  templateUrl: './card-job-proposal.component.html',
  styleUrls: ['./card-job-proposal.component.scss']
})
export class CardJobProposalComponent implements OnInit {

  public clicked : boolean= false
  public push : boolean= false;
  showFiller = true;

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
