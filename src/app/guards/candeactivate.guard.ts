import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './candeactivate.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactivate>{
  constructor() { }
  canDeactivate(component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    let url: string = state.url;
    console.log('Url: ' + url);

    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
