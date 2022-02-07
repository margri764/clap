import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


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

}
