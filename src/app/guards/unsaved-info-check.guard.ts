import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsavedInfoCheckGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    // You can add your logic here to check if there are unsaved changes or information that needs to be saved before navigating away from the current route. For example, you can check if a form is dirty or if there are any unsaved changes in the component. If there are unsaved changes, you can prompt the user with a confirmation dialog asking if they want to leave the page without saving. If the user confirms, you can return true to allow navigation; if they cancel, you can return false to prevent navigation.
    const hasUnsavedChanges = component.hasUnsavedChanges();
    if (!hasUnsavedChanges) {
      return true; // Allow navigation if there are no unsaved changes
    }else{
      const confirmLeave = window.confirm('You have unsaved changes. Are you sure you want to leave this page?');
      return confirmLeave;
    }
  }
  
}
