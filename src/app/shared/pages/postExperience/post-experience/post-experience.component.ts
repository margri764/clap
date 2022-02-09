import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-experience',
  templateUrl: './post-experience.component.html',
  styleUrls: ['./post-experience.component.scss']
})
export class PostExperienceComponent implements OnInit {

  myForm:FormGroup = this.fb.group({
    name:    ['', [Validators.required] ],
    alias:   ['', [Validators.required] ],
    titular: ['', [Validators.required]],
    web :    [''],
    email:   [''],
  
  
  });

  
    constructor(
              private fb : FormBuilder,
    )
     {
     }
  
    ngOnInit(): void {
    }
  
    validField( field: string ) {
  
      return this.myForm.controls[field].errors 
              && this.myForm.controls[field].touched;
    }
  
    sendForm (){
      console.log(this.myForm.value)
    }
  
  
  }
  