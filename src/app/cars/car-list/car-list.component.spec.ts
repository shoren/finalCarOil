import { ComponentFixture, TestBed } from '@angular/core/testing';

import { carListComponent } from './car-list.component';

describe('carListComponent', () => {
  let component: carListComponent;
  let fixture: ComponentFixture<carListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ carListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(carListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
