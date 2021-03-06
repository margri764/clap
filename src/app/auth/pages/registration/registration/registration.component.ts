import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public iAgree: boolean=false;

  myForm:FormGroup = this.fb.group({
    email:    ['', [Validators.required]],
    password: ['', [Validators.required] ],
    username: ['marcelo']

  
  
  });

  
    constructor(
              private fb : FormBuilder,
              // private artistService : ArtistService,
              private loginService : LoginService,
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


    ErrorMsg( error : string){
      Swal.fire({
        title: error,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    
    }
  
    sendForm (){

      // const { email, password } = this.myForm.value;
      this.loginService.signUp(this.myForm.value).subscribe( 
        ({token}) => { if(token)
          console.log(token)
          this.router.navigateByUrl('auth/confirmacion') } 
          ,(err)=>{ this.ErrorMsg('Ups! algo salió mal, por favor intenta mas tarde') }
          // ,(err)=>{ this.ErrorMsg(err.error.msg) }

      )
      }

        //  (res) => { if(res.success==true){
        //    this.router.navigateByUrl('auth/confirmacion') }
        //   //  else{ alert('o')}
        //  } ,(err)=>{ this.ErrorMsg(err.error.msg) }
        // ) } 
            
          
      
  
  test(){
    return this.iAgree=true;

  }
  }
  