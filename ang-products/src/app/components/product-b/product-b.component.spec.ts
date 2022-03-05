import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBComponent } from './product-b.component';

describe('ProductBComponent', () => {
  let component: ProductBComponent;
  let fixture: ComponentFixture<ProductBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
