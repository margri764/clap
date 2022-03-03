import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ArtistService } from 'src/app/services/artist/artist.service';
import  {Cliente}  from '../../test'

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
private dataDelete : any ;

//estos son los que se borran y no se deben mandar
dataToDelete(value : string ){


  this.arrDataToDelete.push(value);

 
  // this.dataDelete = new Set ( this.arrDataToDelete);


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
   let data;
   
  //  const arrayConcat = this.array.concat(this.arrDataToDelete) 
   
  //  console.log(arrayConcat);
   
   data = new Set ( this.array);


   var data3=[];

   _.each(data1,function(objeto) {
     
     var elemento_en_data2 = _.find(data2,objeto);
     
     if(elemento_en_data2===undefined) {
       data3.push(objeto);
     }
     
   });












   console.log(data)
   return data;
}

  sendForm(){
  console.log(this.arrDataToDelete,'arrDataToDelete');
  // console.log(this.arrDataToDelete,'antes de borrar repetidos arrdattodelete'); //antes de borra repetidos
  //   console.log(this.dataDelete);
    this.skills();
    // console.log(this.array)
    // alert(JSON.stringify(this.myForm.value))
    // alert(JSON.stringify(this.array));

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
