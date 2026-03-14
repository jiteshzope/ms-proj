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

const routes : Routes = [
  {path : 'home', canActivate: [HomePageGuard], component : HomePageComponent, children : [
    {path : 'products', component : ProductListComponent},
    {path : 'list', component : InformationComponent},
    {path : 'again', component : HomePageComponent, children : [
      {path : 'haha', component : ProductListComponent}
    ]},
  ]},
  {path : 'products', component : ProductListComponent},
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
