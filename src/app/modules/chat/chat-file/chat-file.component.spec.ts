import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFileComponent } from './chat-file.component';

describe('ChatFileComponent', () => {
  let component: ChatFileComponent;
  let fixture: ComponentFixture<ChatFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
