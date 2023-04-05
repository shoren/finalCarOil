import { EventEmitter, Injectable } from '@angular/core';
import { car } from './car.model';
import { MOCKcarS } from './MOCKcars';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class carService {
  carSelectedEvent = new EventEmitter<car>();
  carListChangedEvent: Subject<car[]> = new Subject<car[]>();

  // carListChangedEvent : car[] = []
  
  private cars: car[] = []
  maxcarId: number;

  constructor() {
    this.cars = MOCKcarS
    this.maxcarId = this.getMaxId();
   }


  
  getMaxId(): number {
    let maxId = 0
    
    for(const car of this.cars){
      const currentId = parseInt(car.id);
      if(currentId >  maxId){
        maxId = currentId;
      }
    }
    return maxId;
}

// code go here to call back end
// /api/cars
// this.http.get<{types}>('http://localhost:3000/api/cars') replace this with 44 to get them from mongodb!
// cars = this.array 



   getcars(): car[]{
    return this.cars.slice();
   }


   getcar(id: string) : car{
    for (let car of this.cars) {
      if(car.id == id) {
         return car;
      }
    }
    return null as any;
  }

   getAcar(id: number){
    return this.cars[id];
   }


  //  addcar(car: car){
  //   this.cars.push(car);
  //   this.carListChangedEvent.next(this.cars.slice());
  //  }

  addcar(newcar:car){
    if(!newcar){
      return;
    }

    this.maxcarId++;
    newcar.id = String(this.maxcarId);

    this.cars.push(newcar);
    const carsListClone = this.cars.slice();

    this.carListChangedEvent.next(carsListClone);
  }


   addcars(cars: car[]){
    this.cars.push(...cars);
    this.carListChangedEvent.next(this.cars.slice());
   }

   updatecar(originalcar: car, newcar: car){
    if(!originalcar || !newcar){
      return;
    }

    let pos = this.cars.indexOf(originalcar)
    if(pos < 0 ){
      return;
    }

    newcar.id = originalcar.id;
    this.cars[pos] = newcar;
    let carsListClone = this.cars.slice();
    this.carListChangedEvent.next(carsListClone);
   }


   deletecar(car: car){
    if(!car){
      return;
    }

    let pos = this.cars.indexOf(car)
    if(pos < 0){
      return;
    }
    this.cars.splice(pos,1);
    let carListClone = this.cars.slice();
    this.carListChangedEvent.next(carListClone)

   }
}
