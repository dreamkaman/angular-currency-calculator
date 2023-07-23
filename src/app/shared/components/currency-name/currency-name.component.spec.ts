import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyNameComponent } from './currency-name.component';

describe('CurrencyNameComponent', () => {
  let component: CurrencyNameComponent;
  let fixture: ComponentFixture<CurrencyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
