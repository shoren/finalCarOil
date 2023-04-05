import { ComponentFixture, TestBed } from '@angular/core/testing';

import { carsComponent } from './cars.component';

describe('carsComponent', () => {
  let component: carsComponent;
  let fixture: ComponentFixture<carsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ carsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(carsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
