import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewChecked {

  public rights : boolean = false;
  public register : boolean = false;


  constructor(
             private cdRef : ChangeDetectorRef,
             private router : Router,
             ) 


 { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
    this.changePath();
  }




changePath() {
  
  this.router.events
  .pipe(filter(evt => evt instanceof NavigationEnd))  
  .subscribe( (event:any) => {
   if (event.url.includes('/home')){
      this.rights= true;
      this.register= false;
   } else {
      this.rights= false;
      this.register= true;
   }

  });


}

  // changeFooter(){
  //   if(window.location.pathname.includes('home')){ 
  //     alert('ddd')
  //     this.home= true;
  //     this.rights= false;
  //   }

  // }

}
