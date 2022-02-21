import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'clap';
  id:boolean=false;
  constructor(
            public router : Router
  ){

  }
  ngOnInit(): void {
  this.router.events
  .pipe(filter(evt => evt instanceof NavigationEnd))  
  .subscribe((event: any) => {
   (event.url.includes('/bienvenida/')) 
   ?  this.id=true : this.id=false;
   
  });
}

}
