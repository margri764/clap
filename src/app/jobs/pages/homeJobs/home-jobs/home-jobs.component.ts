import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-jobs',
  templateUrl: './home-jobs.component.html',
  styleUrls: ['./home-jobs.component.scss']
})
export class HomeJobsComponent implements OnInit {


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
