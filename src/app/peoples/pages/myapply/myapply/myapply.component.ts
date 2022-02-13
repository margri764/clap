import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myapply',
  templateUrl: './myapply.component.html',
  styleUrls: ['./myapply.component.scss']
})
export class MyapplyComponent implements OnInit {

  heroeHeader =[
    {
      nombre: "marcelo"
    }
  ]

  heroes =[
    {
      nombre: "marcelo"
    },
    {
      nombre: "marcelo"
    },
    {
      nombre: "marcelo"
    },
    {
      nombre: "marcelo"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
