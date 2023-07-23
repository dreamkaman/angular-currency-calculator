import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPropertyComponent } from './currency-property.component';

describe('CurrencyPropertyComponent', () => {
  let component: CurrencyPropertyComponent;
  let fixture: ComponentFixture<CurrencyPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
