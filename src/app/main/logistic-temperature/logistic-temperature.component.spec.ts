import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticTemperatureComponent } from './logistic-temperature.component';

describe('LogisticTemperatureComponent', () => {
  let component: LogisticTemperatureComponent;
  let fixture: ComponentFixture<LogisticTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
