import { Component, Input, OnInit} from '@angular/core';
import { car } from '../../car.model';

@Component({
  selector: 'cms-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class carItemComponent {
  @Input() car: car;
  @Input() index: number;

  ngOnInit(){

  }


}
