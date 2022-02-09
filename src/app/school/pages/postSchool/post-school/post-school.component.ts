import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-school',
  templateUrl: './post-school.component.html',
  styleUrls: ['./post-school.component.scss']
})
export class PostSchoolComponent implements OnInit {

  public showFiller : boolean = true;
  public push : boolean= false;
  public clicked : boolean = false;
  

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
  