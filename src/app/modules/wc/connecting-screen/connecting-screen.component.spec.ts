import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectingScreenComponent } from './connecting-screen.component';

describe('ConnectingScreenComponent', () => {
  let component: ConnectingScreenComponent;
  let fixture: ComponentFixture<ConnectingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectingScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
