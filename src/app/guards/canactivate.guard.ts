import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {

  constructor(private authService: AuthService){}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {


      if(this.authService.checkLogin() == null){
        console.log("return false");
        return false;
       } else {  
        console.log("return true");
        return true;   
       }

  }
  
  
}
