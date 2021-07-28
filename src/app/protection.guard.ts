import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as AppSettings from "@nativescript/core/application-settings";

@Injectable({
  providedIn: 'root'
})
export class ProtectionGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  

          
    if(AppSettings.getString('token')){
      return true;}
      else{
        return false
      }
  }
  
}
