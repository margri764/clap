import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.scss']
})
export class CardSkillsComponent implements OnInit {


  
  heroes =[
    {
      skill: "Habilidades"
    },
    {
      skill: "Software"
    },
    {
      skill: "Idiomas"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
