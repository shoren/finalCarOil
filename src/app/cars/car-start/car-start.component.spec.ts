import { ComponentFixture, TestBed } from '@angular/core/testing';

import { carStartComponent } from './car-start.component';

describe('carStartComponent', () => {
  let component: carStartComponent;
  let fixture: ComponentFixture<carStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ carStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(carStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
