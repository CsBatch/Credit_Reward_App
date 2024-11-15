import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCompletionComponent } from './profile-completion.component';

describe('ProfileCompletionComponent', () => {
  let component: ProfileCompletionComponent;
  let fixture: ComponentFixture<ProfileCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCompletionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
