import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-my-industry',
  templateUrl: './my-industry.component.html',
  styleUrls: ['./my-industry.component.scss']
})
export class MyIndustryComponent implements OnInit {

// public ux: boolean= false;
public editorial: boolean= false;

@ViewChild('ux',{static:false}) ux: ElementRef | undefined;

@HostListener('click') onMouseClic(){
  alert('ee')
  let test= this.ux?.nativeElement.querySelector('.uxa')
  this.rendered.setStyle(test,'display','none')

}


  myForm:FormGroup = this.fb.group({
    jobTitle:    ['jefe diseñador', [Validators.required] ],
  })

    industries: string[] = [
      'Animación',
      'Diseño',
    
    ];
  
  constructor(
            private fb : FormBuilder,
            private artistService : ArtistService,
            private rendered : Renderer2,
            
  ) { }

  ngOnInit(): void {
  }

  validField( field: string ) {

    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }

//   styleButtonSkill(value : string){

//     if(value=='ux' ){ return  { "background":"black","color":"white" } };
//     if(this.editorial==true ){ return  { "background":"black","color":"white" } };


//  return{}

//   }

  selectedSkill(skill : string){

    switch( skill ){ 
      case 'ux' :
     
        this.rendered.setStyle(this.ux?.nativeElement,'backgroundColor','black')

  
       break;

      case 'editorial' :
      this.editorial=true;

      break;
       
      
     
  
    }

  }

  sendForm(){
    alert(JSON.stringify(this.myForm.value))
    // this.artistService.insertExperienceInDB(this.myForm.value).subscribe(
    //   (res)=>{ if(res) alert('experiencia agregada correctamente')}
    // )

}

}