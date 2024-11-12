import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCardManagementComponent } from './bank-card-management.component';

describe('BankCardManagementComponent', () => {
  let component: BankCardManagementComponent;
  let fixture: ComponentFixture<BankCardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankCardManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
