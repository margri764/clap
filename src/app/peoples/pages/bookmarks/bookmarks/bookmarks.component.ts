import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  public showArtist : boolean = false;
  public showJob : boolean = false;
  public showBusinnes : boolean = false;
  public showSchool : boolean = false;
  public showEvent : boolean = false;
  public showAwards : boolean = false;



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


  btnPressed( value: string) {

    switch( value ){ 

      case 'artist' :
          this.showArtist=true;
          this.showJob=false;
          this.showBusinnes=false;

      break;
      
      case 'job': 
          this.showJob=true;
          this.showArtist=false;
          this.showBusinnes=false;
      break;

      case 'business': 
          this.showBusinnes=true;
          this.showJob=false;
          this.showArtist=false;
     break;
     
     case 'school': 
          this.showSchool=true;
          this.showBusinnes=false;
          this.showJob=false;
          this.showArtist=false;
     break;
      
     case 'event': 
          this.showEvent=true;
          this.showSchool=false;
          this.showBusinnes=false;
          this.showJob=false;
          this.showArtist=false;
     break;

     case 'awards': 
          this.showAwards=true;
          this.showEvent=false;
          this.showSchool=false;
          this.showBusinnes=false;
          this.showJob=false;
          this.showArtist=false;
     break;


    }
}


styleObject() {

  

if(this.showArtist== true){   
  return  { "border-color":"#b0bcec"}
}

if(this.showJob== true){
  return  { "border-color":"#fface0" }
}

if(this.showBusinnes== true){
  return  { "border-color":"#aae8b9" }
}

if(this.showSchool== true){
  return  { "border-color":"#ffa076" }
}

if(this.showEvent== true){
  return  { "border-color":"#fff1b9" }
}

if(this.showAwards== true){
  return  { "border-color":"#b29dd5" }
}



  return {}


}  

 
}
