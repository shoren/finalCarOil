import { ComponentFixture, TestBed } from '@angular/core/testing';

import { carEditComponent } from './car-edit.component';

describe('carEditComponent', () => {
  let component: carEditComponent;
  let fixture: ComponentFixture<carEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ carEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(carEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
