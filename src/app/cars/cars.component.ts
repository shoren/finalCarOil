import { Component, OnDestroy, OnInit } from '@angular/core';
import { car } from './car.model';
import { carService } from './car.service';
import { Subscription } from "rxjs"

@Component({
  selector: 'cms-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [carService]
})
export class carsComponent implements OnInit, OnDestroy {
  selectedcar: car;
  title = 'cms';

  car: car [];
  private docChangedSub: Subscription;

  constructor(private carService: carService){  }

  // ngOnInit(){
  //   this.car = this.carService.getcars();
  //   this.carService.carSelectedEvent
  //   .subscribe(
  //     (car: car) => {
  //       this.selectedcar = car;
  //     }
  //   );
  // }

  oncarAdded(car:car){
    this.car.push(car);
  }

  ngOnInit(){
    this.car = this.carService.getcars();
    // this.carService.carSelectedEvent
    this.docChangedSub = this.carService.carListChangedEvent
    .subscribe(
      (car: car[]) => {
        this.car = car;
      }
    );
  }

  ngOnDestroy(): void {
    this.docChangedSub.unsubscribe();
  }
}