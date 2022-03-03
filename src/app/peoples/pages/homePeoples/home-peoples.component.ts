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
  public catLanguaje : string= '';
  public catExperience : string= '';
  public catContract : string= '';

  public camp:boolean = false;
  public hab:boolean = false;
  public soft:boolean = false;
  public lang:boolean = false;
  public exp:boolean = false;
  public contr:boolean = false;
  
  
  arrCampo:any =['tech1','tech2']
  arrHabil : any =['Programacion','Cloud Computing','Blockchain'];
  arrSoft : any =['Adobe Illustrator','Google Sketchup','Gimp'];
  arrLanguaje : any =['Ingles','Español','Italiano'];
  arrExperience : any =[''];
  arrContract : any =['Termino indefinido','Prestacion de servicios','Obra labor'];



  
  
  
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




     
arrToFilter(value : string  ){

  this.array.push(value) ;
  
  
  if(this.arrCampo.includes(value) ){
    
    this.camp=true;
    this.catCampo = value;

 
 }else if(this.arrHabil.includes(value) ){
   
    this.hab=true;
    this.catHabilidad = value;
  
  } else if(this.arrSoft.includes(value) ){
    
    this.soft=true;
    this.catSoftware = value;
    
  } else if(this.arrLanguaje.includes(value) ){
  
   this.lang=true;
   this.catLanguaje = value;
 
 } else if(this.arrExperience.includes(value) ){
   
   this.exp=true;
   this.catExperience = value;
   
 }else if(this.arrContract.includes(value) ){
   
  this.contr=true;
  this.catContract = value;
}
}


//estos son los que se borran y no se deben mandar, se dispara el metodo cuando se cancela una opcion y se filtra para q solo
//se guarde una vez el que se borro (para despues compara el array de "cancelados" y el array con todas las opciones q se fueron seleccionando)
//el metodo q hace esto es queryToBack()
dataToDelete(value : string ){


  this.arrDataToDelete.push(value);

  const uniqueArray =  this.arrDataToDelete.filter((valor, indice) => {
      return  this.arrDataToDelete.indexOf(valor) === indice;
    }
  );
 this.dataDelete = uniqueArray;


}


//muestra el boton asignado para c/ categoria (se supone q va a seleccionar una opcion de cada categoria)
closeElementToFilter( value : string){
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

    case 'languaje':
      this.lang=false;
    break

    case 'experience':
      this.exp=false;
    break

    case 'contract':
      this.contr=false;
    break
  }

}
//toma todos los datos repetidos del array y crea uno nuevo sin repetidos
  queriesToBack( ){
   
   const uArray =  this.array.filter((valor, indice) => {
     return  this.array.indexOf(valor) === indice;
    }
    );


   const uniqueArray2 = uArray.filter( value => this.dataDelete.indexOf(value) == -1);
  alert(JSON.stringify(uniqueArray2));

}

  sendForm(){

    this.queriesToBack();

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
