import { ComponentFixture, TestBed } from '@angular/core/testing';

import { carItemComponent } from './car-item.component';

describe('carItemComponent', () => {
  let component: carItemComponent;
  let fixture: ComponentFixture<carItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ carItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(carItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
