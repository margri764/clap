import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-card-job-creator',
  templateUrl: './card-job-creator.component.html',
  styleUrls: ['./card-job-creator.component.scss']
})
export class CardJobCreatorComponent implements OnInit {  

  
  

modo: string[] = ['Virtual','Presencial'];
contract: string[] = ['Término indefenido','Prestación de servicios','Obra labor'];
languages: string[] = ['Español','Inglés','Frances','Italiano','Ruso'];
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


  
 
 
  comment = new FormControl();
  
  myForm:FormGroup = this.fb.group({
    jobTitle:    ['', [Validators.required] ],
    company:     ['', [Validators.required] ],
    comment:     ['', [Validators.required]],
    web :    [''],
    email:   [''],
  
  
  });
    
              constructor(
                         private fb : FormBuilder,
  
              ) { }
  
    ngOnInit(): void {
    }
  
    validField( field: string ) {
  
      return this.myForm.controls[field].errors 
              && this.myForm.controls[field].touched;
    }
    sendForm(){
      console.log(this.myForm.value)
  
    }
  
    onCommentChange() {
      console.log(this.comment.value);
    } 
  }
  