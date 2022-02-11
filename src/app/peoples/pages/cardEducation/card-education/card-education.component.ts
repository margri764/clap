import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-education',
  templateUrl: './card-education.component.html',
  styleUrls: ['./card-education.component.scss']
})
export class CardEducationComponent implements OnInit {


  heroes =[
    {
      nombre: "marcelo"
    },
    {
      nombre: "fenando"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
