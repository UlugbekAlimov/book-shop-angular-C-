import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCategoryComponent } from './category.component';

describe('SellerCategoryComponent', () => {
  let component: SellerCategoryComponent;
  let fixture: ComponentFixture<SellerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
