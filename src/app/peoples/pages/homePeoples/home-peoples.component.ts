import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-peoples',
  templateUrl: './home-peoples.component.html',
  styleUrls: ['./home-peoples.component.scss']
})
export class HomePeoplesComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples(){
    this.showPeople= true;
  }
}
