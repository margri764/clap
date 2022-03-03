import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ArtistService } from 'src/app/services/artist/artist.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home-peoples',
  templateUrl: './home-peoples.component.html',
  styleUrls: ['./home-peoples.component.scss']
})
export class HomePeoplesComponent implements OnInit {


  public showPeople: boolean =false;
  public arrArtist :any=[];
  public test : any;
  
  private array : any []= [];
  private arrDataToDelete : any [] = [];
  private dataDelete : any [] = [];

  
  public catCampo : string='' ;
  public catHabilidad : string= '';
  public catSoftware : string= '';


  public camp:boolean = false;
  public hab:boolean = false;
  public soft:boolean = false;



modo: string[] = ['Virtual','Presencial'];
contract: string[] = ['Término indefenido','Prestación de servicios','Obra labor'];
salary: string[] = ['$200','$500'];

languages: string[] = ['Español','Inglés','Frances','Italiano','Ruso'];
states: string[] = [
  'Alabama',
  'Alaska',
  
];

floatLabelControl = new FormControl('auto');
myForm:FormGroup = this.fb.group({
  category:    [''],



});

  constructor(
              private dialog : MatDialog,
              private artistService : ArtistService,
              private fb : FormBuilder,
              private cdRef:ChangeDetectorRef
  ) { }




arrCampo:any =['tech1','tech2']
arrHabil : any =['Diseño Editorial','Diseño UX/UI','Branding'];
arrSoft : any =['Adobe Illustrator','Google Sketchup','Gimp'];

     
arrToFilter(value : string  ){

  this.array.push(value) ;
  
  
  if(this.arrCampo.includes(value) ){
    
    this.camp=true;
    
    this.catCampo = value;

 
 }else if(this.arrHabil.includes(value) ){

  this.catHabilidad = value;
  
    this.hab=true;
  } else if(this.arrSoft.includes(value) ){

    this.catSoftware = value;
    
      this.soft=true;
    }
}


//estos son los que se borran y no se deben mandar
dataToDelete(value : string ){


  this.arrDataToDelete.push(value);

  const uniqueArray =  this.arrDataToDelete.filter((valor, indice) => {
      return  this.arrDataToDelete.indexOf(valor) === indice;
    }
  );
 this.dataDelete = uniqueArray;


}

closeElementToFilter( value : string){
  // console.log(value)
  switch(value){
    case 'campo':
        this.camp=false;
    break

    case 'habilidad':
        this.hab=false;
    break

    case 'software':
        this.soft=false;
    break

  }

}
//toma todos los datos repetidos del array y crea uno nuevo sin repetidos
  skills(  ){
   let data:any;
   let data2:any;
   
  //  const arrayConcat = this.array.concat(this.arrDataToDelete) 
   
  //  console.log(arrayConcat);
   
  //  data = new Set ( this.array);

   console.log('dataDelete: ',this.dataDelete);
   
   const uArray =  this.array.filter((valor, indice) => {
     return  this.array.indexOf(valor) === indice;
    }
    );

    console.log('uArray: ',uArray);

   const uniqueArray2 = uArray.filter( value => this.dataDelete.indexOf(value) == -1)

   console.log('uniqueArray2: ',uniqueArray2);
  
   const array1=['a','b','c','d'];
   const array2=['a','b'];

    const uniqueArray = array1.filter(value => array2.indexOf(value) == -1)
    console.log(uniqueArray)

}

  sendForm(){

    this.skills();


  }



  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples(){
    this.showPeople= true;
    this.artistService.getArtists().subscribe(
      ({user})=> { this.arrArtist = user,
      console.log(this.arrArtist)
      })
  }







  
}
