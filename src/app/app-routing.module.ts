import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { carDetailComponent } from './cars/car-detail/car-detail.component';
import { carEditComponent } from './cars/car-edit/car-edit.component';
import { carStartComponent } from './cars/car-start/car-start.component';
import { carsComponent } from './cars/cars.component';


const routes: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full' },
  {path: 'cars', component: carsComponent, children:[
     { path: '', component: carStartComponent  },
     { path: 'new', component: carEditComponent },
     { path: ':id', component: carDetailComponent },
     { path: ':id/edit', component: carEditComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
