import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsnNumberComponent } from './ssn-number.component';

describe('SsnNumberComponent', () => {
  let component: SsnNumberComponent;
  let fixture: ComponentFixture<SsnNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsnNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsnNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
