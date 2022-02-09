import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tag-school',
  templateUrl: './tag-school.component.html',
  styleUrls: ['./tag-school.component.scss']
})
export class TagSchoolComponent implements OnInit {

  public showFiller : boolean = true;
  public push : boolean= false;
  public clicked : boolean = false;

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
  
  
 
  
  

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
  