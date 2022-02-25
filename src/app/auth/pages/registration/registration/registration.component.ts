import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist/artist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public iAgree: boolean=false;

  myForm:FormGroup = this.fb.group({
    email:   ['',[Validators.required]],
    password:    ['', [Validators.required] ],

  
  
  });

  
    constructor(
              private fb : FormBuilder,
              private artistService : ArtistService,
              private router : Router
    )
     {
     }
  
    ngOnInit(): void {
    }
  
    validField( field: string ) {
  
      return this.myForm.controls[field].errors 
              && this.myForm.controls[field].touched;
    }


    confirmArtist(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Artista creado correctamente',
        showConfirmButton: false,
        timer: 4000
      });
    
    }
  
    sendForm (){

      this.artistService.validateEmail(this.myForm.value).subscribe( 
         ( ) => {this.router.navigateByUrl('auth/confirmacion'), console.log('despara confirm')

      } )
    }   
            
          
      
  
  test(){
    return this.iAgree=true;

  }
  }
  