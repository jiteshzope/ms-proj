import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { BadgeComponent } from './components/badge/badge.component';
import { InformationComponent } from './components/information/information.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageGuard } from './guards/home-page.guard';
import { HomeChildrenAccessGuard } from './guards/home-children-access.guard';
import { UnsavedInfoCheckGuard } from './guards/unsaved-info-check.guard';

const routes : Routes = [
  // canActivate guard is used to decide whether to allow access to a route or not. It can be used to protect routes that require authentication or specific permissions. In this example, the HomePageGuard is applied to the 'home' route, which means that the guard will determine whether the user can access the home page or not. If the guard returns true, the user will be allowed to access the home page; if it returns false, the user will be denied access and can be redirected to another page or shown an error message.
  // canActivateChild guard is used to decide whether to allow access to child routes of a specific route. It can be used to protect child routes that require authentication or specific permissions. In this example, the HomeChildrenAccessGuard is applied to the child routes of the 'home' route, which means that the guard will determine whether the user can access the child routes of the home page or not. If the guard returns true, the user will be allowed to access the child routes; if it returns false, the user will be denied access and can be redirected to another page or shown an error message.
  {path : 'home', canActivate: [HomePageGuard], canActivateChild: [HomeChildrenAccessGuard], component : HomePageComponent, children : [
    {path : 'products', component : ProductListComponent},
    {path : 'list', component : InformationComponent},
    {path : 'again', component : HomePageComponent, children : [
      {path : 'haha', component : ProductListComponent}
    ]},
  ]},
  {path : 'products/:category/:pageSize', canDeactivate: [UnsavedInfoCheckGuard], component : ProductListComponent},
  {path : 'information', component : InformationComponent},
  {path : '', redirectTo : '/home', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    BadgeComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
