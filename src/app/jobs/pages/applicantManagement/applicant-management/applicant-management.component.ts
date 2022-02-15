import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-applicant-management',
  templateUrl: './applicant-management.component.html',
  styleUrls: ['./applicant-management.component.scss']
})
export class ApplicantManagementComponent implements OnInit {

  public test : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  tests(){
    return this.test= !this.test
  }
}
