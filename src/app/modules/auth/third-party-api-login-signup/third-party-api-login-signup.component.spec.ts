import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyApiLoginSignupComponent } from './third-party-api-login-signup.component';

describe('ThirdPartyApiLoginSignupComponent', () => {
  let component: ThirdPartyApiLoginSignupComponent;
  let fixture: ComponentFixture<ThirdPartyApiLoginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartyApiLoginSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyApiLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
