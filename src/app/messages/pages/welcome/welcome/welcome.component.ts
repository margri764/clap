import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  user!: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;

  constructor(
    private authService: SocialAuthService,
    // private fb : FormBuilder,
    private loginService : LoginService,
    private activatedRoute : ActivatedRoute
    // private router : Router
  ) { }


  
  ngOnInit(): void {
  

    this.activatedRoute.params.subscribe(
       ({emailkey}) => {
      console.log(emailkey);
      this.loginService.validateEmail(emailkey).subscribe()
      
    })




  }

}
