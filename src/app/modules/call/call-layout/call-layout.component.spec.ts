import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLayoutComponent } from './call-layout.component';

describe('CallLayoutComponent', () => {
  let component: CallLayoutComponent;
  let fixture: ComponentFixture<CallLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
