import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCComponent } from './product-c.component';

describe('ProductCComponent', () => {
  let component: ProductCComponent;
  let fixture: ComponentFixture<ProductCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
