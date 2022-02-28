import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class RevalidateTokenGuardGuard implements CanActivate {


  constructor( private loginService: LoginService,
    private router: Router
     ){}

  canActivate(): Observable<boolean> | boolean {
    return this.loginService.tokenValidator()
            .pipe(
              tap( valid => {
                if ( !valid ) {
                  this.router.navigateByUrl('/home');
                }
              })
            );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.loginService.tokenValidator()
      .pipe(
        tap( valid => {
          if ( !valid ) {
            this.router.navigateByUrl('/auth');
          }
        })
      );
  }
}
