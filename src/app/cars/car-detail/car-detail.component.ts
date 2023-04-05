import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { carService } from '../car.service';
import { car } from '../car.model';



@Component({
  selector: 'cms-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class carDetailComponent {
  car:car;
  id: number;

  constructor(private carService: carService,
              private route: ActivatedRoute,
              private router: Router){

  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.car = this.carService.getAcar(this.id);
      }
    );
  }

  onEditcar(){
    // this.router.navigate(['id'],{relativeTo: this.route});
    this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});
  }


  
}
