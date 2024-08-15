import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPublisherComponent } from './publisher.component';

describe('SellerPublisherComponent', () => {
  let component: SellerPublisherComponent;
  let fixture: ComponentFixture<SellerPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerPublisherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
