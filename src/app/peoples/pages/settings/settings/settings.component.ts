import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  tipo: string;
  fecha: number;
  pedido: number;
  pdf: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public pressed : boolean = false;
  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

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
  displayedColumns: string[] = ['fecha', 'tipo', 'pedido', 'pdf'];

     dataSource: PeriodicElement[] = [
    {fecha: 1, tipo: 'Hydrogen', pedido: 1.0079, pdf: 'H'},
    {fecha: 2, tipo: 'Helium', pedido: 4.0026, pdf: 'He'},
    {fecha: 3, tipo: 'Lithium', pedido: 6.941, pdf: 'Li'},
    {fecha: 4, tipo: 'Beryllium', pedido: 9.0122, pdf: 'Be'},
    {fecha: 5, tipo: 'Boron', pedido: 10.811, pdf: 'B'},
    {fecha: 6, tipo: 'Carbon', pedido: 12.0107, pdf: 'C'},
    {fecha: 7, tipo: 'Nitrogen', pedido: 14.0067, pdf: 'N'},
    {fecha: 8, tipo: 'Oxygen', pedido: 15.9994, pdf: 'O'},
    {fecha: 9, tipo: 'Fluorine', pedido: 18.9984, pdf: 'F'},
    {fecha: 10, tipo: 'Neon', pedido: 20.1797, pdf: 'Ne'},
  ];



  myForm:FormGroup = this.fb.group({
    password:    ['', [Validators.required] ],
    newpassword:   ['', [Validators.required] ], 
  
  });

  myForm2:FormGroup = this.fb.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  
  });
    

  
    constructor(
              private fb : FormBuilder,
    )
     { }
  
    ngOnInit(): void {

      

      
    }
  
    validField( field: string ) {
  
      return this.myForm.controls[field].errors 
              && this.myForm.controls[field].touched;
    }

    validField2( field: string ) {
  
      return this.myForm2.controls[field].errors 
              && this.myForm2.controls[field].touched;
    }
  
    sendForm (){
      console.log(this.myForm.value)
    }

    showNewPayment(){
      return this.pressed=!this.pressed;
    }
    
    onFormSubmit() {
      alert(JSON.stringify(this.myForm2.value, null, 2));
    }
}
