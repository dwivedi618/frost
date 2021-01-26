import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWIthPreviewComponent } from './upload-with-preview.component';

describe('UploadWIthPreviewComponent', () => {
  let component: UploadWIthPreviewComponent;
  let fixture: ComponentFixture<UploadWIthPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadWIthPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadWIthPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
