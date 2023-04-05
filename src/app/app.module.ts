import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { carsComponent } from './cars/cars.component';
import { carListComponent } from './cars/car-list/car-list.component';
import { carDetailComponent } from './cars/car-detail/car-detail.component';
import { carItemComponent } from './cars/car-list/car-item/car-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { carEditComponent } from './cars/car-edit/car-edit.component';
import { carStartComponent } from './cars/car-start/car-start.component';
import { carService } from './cars/car.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    carsComponent,
    carListComponent,
    carDetailComponent,
    carItemComponent,
    DropdownDirective,
    carEditComponent,
    carStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [carService],
  bootstrap: [AppComponent]
})
export class AppModule { };