import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RouteguardGuard implements CanActivate {

  constructor(private http: HttpClient,
    private authService: AuthService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree|any {
    if (this.authService.isLoggedIn) {
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
