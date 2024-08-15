import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAuthorComponent } from './author.component';

describe('SellerAuthorComponent', () => {
  let component: SellerAuthorComponent;
  let fixture: ComponentFixture<SellerAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerAuthorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
