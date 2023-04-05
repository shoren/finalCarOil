import { ComponentFixture, TestBed } from '@angular/core/testing';

import { carDetailComponent } from './car-detail.component';

describe('carDetailComponent', () => {
  let component: carDetailComponent;
  let fixture: ComponentFixture<carDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ carDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(carDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
