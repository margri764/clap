import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, HostListener, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-my-industry',
  templateUrl: './my-industry.component.html',
  styleUrls: ['./my-industry.component.scss']
})
export class MyIndustryComponent implements OnInit, AfterViewChecked {

// public ux: boolean= false;
public editorial: boolean= false;
public ux: boolean= false;
public branding: boolean= false;
public value: string= 'clear';
public closeEditorial: boolean= false;







  myForm:FormGroup = this.fb.group({
    jobTitle:    ['jefe diseñador', [Validators.required] ],
  })

    industries: string[] = [
      'Animación',
      'Diseño',
    
    ];
  
  constructor(
            private fb : FormBuilder,
            private cdRef:ChangeDetectorRef
            
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
 
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

  selectSkill(skill : string){

    switch( skill ){ 
      case 'ux' :
     
      this.ux=true
  
       break;

      case 'editorial' :

        if(this.value !='no se debe enviar'){
          this.editorial=!this.editorial;
          this.closeEditorial=true;
          console.log('valor para mandar a BD','valor: ',this.value)
      }
    
      
   
      // if(this.editorial==false){ return} 
      
      break;

      case 'branding' :
        this.branding=true;
  
        break;
    }

  }
  closeSkill( skill : string){
    switch( skill ){ 
      case 'ux' :
     
      this.ux=true
  
       break;

      case 'editorial' :
      this.closeEditorial=false;
      this.editorial=true;
      this.value='no se debe enviar'
      console.log('no se deberia mandar el valor para mandar a BD','valor: ',this.value)
   

      break;

      case 'branding' :
        this.branding=true;
  
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