import { Component, OnInit} from '@angular/core';
import { car } from '../car.model';
import { carService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cms-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class carListComponent {
  // @Output() carWasSelected = new EventEmitter<car>();

  car:car[] = [];

  constructor(private carService: carService,
              private router: Router,
              private route: ActivatedRoute){
  }

  ngOnInit(){
    this.car = this.carService.getcars();
  }

  OnNewcar(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // onSelectedcar(car: car){
  //   // this.carWasSelected.emit(car);
  // }
}