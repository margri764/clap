import { ThisReceiver } from '@angular/compiler';
import { AfterViewChecked, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home-jobs',
  templateUrl: './home-jobs.component.html',
  styleUrls: ['./home-jobs.component.scss']
})
export class HomeJobsComponent implements OnInit {

public showJobs : boolean = false;

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

  constructor(

  ) {   }




  ngOnInit(): void {

       this.getJobs();


  }

  getJobs(){
    // (this.showPeople = true) ? this.showPeople = false : this.showPeople= true;
    this.showJobs = true;
  }

}
