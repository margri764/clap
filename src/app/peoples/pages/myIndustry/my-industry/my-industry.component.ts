import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-my-industry',
  templateUrl: './my-industry.component.html',
  styleUrls: ['./my-industry.component.scss']
})
export class MyIndustryComponent implements OnInit, AfterViewChecked {

//show skills selected in template
public editorial: boolean= false;
public ux: boolean= false;
public branding: boolean= false;
public triD: boolean= false;
public modeling: boolean= false;
public print3D: boolean= false;
public publicity: boolean= false;
public portrait: boolean= false;
public landscape: boolean= false;
public arrSkill : any []=[];





//add to object to send DB
public uxSkill : string ='';
public editorialSkill : string ='';
public brandingSkill : string ='';
public triDSkill: string ='';
public modelingSkill: string ='';
public print3DSkill: string ='';
public publicitySkill: string ='';
public portraitSkill: string ='';
public landscapeSkill: string ='';


//show industries selected in template
public animation: boolean= false;
public design : boolean = false;
public photography : boolean = false;

public emptyWhiteFrame : boolean = true;


  myForm:FormGroup = this.fb.group({
    type:    ['artistSkills', [Validators.required] ],
  })

    industries: string[] = [
      'Animación',
      'Diseño',
      'Fotografía'
    
    ];
  
  constructor(
            private fb : FormBuilder,
            private cdRef:ChangeDetectorRef,
            private artistService : ArtistService,
            // private _bottomSheetRef: MaBottomSheetRef<MyIndustryComponent>
            
  ) { 

    }


  ngOnInit(): void {

  }

  ngAfterViewChecked() {
    
    this.cdRef.detectChanges();
    
  }




  validField( field: string ) {

    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }

  selectIndustry(value : string){
  
    ( value == "Animación")? this.animation=true: '';
    ( value == "Diseño")? this.design=true : '';
    ( value == "Fotografía")? this.photography=true : '';

  }

   closeSkill(skillToClose : string){

    switch( skillToClose ){ 
      
      case 'animation' :
      this.animation=false;
      break;
      
      case 'design' :
      this.design=false;
      break;

      case 'photography' :
      this.publicity=false;
      break;
  
    }
   }
  
   //se arma el arreglo para mandar al back
  skillSelectedToBack(skill : string){

    // if(skill == true){

    this.arrSkill.push(skill)



    // }
  }


  selectSkill(skill : string){

    switch( skill ){ 

      case 'ux' :
      this.ux=!this.ux;
      (this.ux==true)? this.uxSkill='Diseñador UX/UI' :this.uxSkill='';

       break;

      case 'editorial' :
        this.editorial=!this.editorial;
       (this.editorial==true)? this.editorialSkill='Diseño Editorial' :this.editorialSkill='';
       break;

      case 'branding' :
        this.branding=!this.branding;
       (this.branding==true)? this.brandingSkill='Branding' :this.brandingSkill='';
      break;

      case 'triD' :
        this.triD=!this.triD;
       (this.triD==true)? this.triDSkill='Animación 3D' :this.triDSkill='';
      break;

      case 'modeling' :
        this.modeling=!this.modeling;
        (this.modeling==true)? this.modelingSkill='Modelado' :this.modelingSkill='';
       break;

      case 'print3D' :
        this.print3D=!this.print3D;
        (this.print3D==true)? this.print3DSkill='Impresión 3D' :this.print3DSkill='';
      break;

      case 'publicity' :
        this.publicity=!this.publicity;
        (this.publicity==true)? this.publicitySkill='Fotografía Publicitaria' :this.publicitySkill='';
      break;

      case 'portrait' :
        this.portrait=!this.portrait;
        (this.portrait==true)? this.portraitSkill='Retratos' :this.portraitSkill='';
      break;

      case 'landscape' :
        this.landscape=!this.landscape;
        (this.landscape==true)? this.landscapeSkill='Paisajismo' :this.landscapeSkill='';
      break;
    }
    this.skillSelectedToBack(skill);
  }


  sendForm(){
    // const skills =[
     
    //         {
    //           design: [this.uxSkill,this.editorialSkill,this.brandingSkill]
    //         },
    //         {
    //           animation: [this.triDSkill, this.modelingSkill,this.print3DSkill]
    //         },
    //         {
    //         photography: [this.publicitySkill, this.portraitSkill, this.landscapeSkill]
    //         }
    //     ]
     

    // Object.assign(this.myForm.value,skills)
    // alert(JSON.stringify(this.myForm.value))
    alert(JSON.stringify(this.arrSkill));

    this.artistService.insertSkillsInDB(this.arrSkill).subscribe(
      (res)=>{ if(res) alert('skills agregados correctamente')}
    )

}

}