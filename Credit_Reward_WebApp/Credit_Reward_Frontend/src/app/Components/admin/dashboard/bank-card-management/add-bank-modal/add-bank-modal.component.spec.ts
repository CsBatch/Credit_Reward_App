import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankModalComponent } from './add-bank-modal.component';

describe('AddBankModalComponent', () => {
  let component: AddBankModalComponent;
  let fixture: ComponentFixture<AddBankModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBankModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBankModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
