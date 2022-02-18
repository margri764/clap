import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  user! : SocialUser;

  constructor(
            private authService: SocialAuthService,

  ) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authService.signOut();
  }

}
