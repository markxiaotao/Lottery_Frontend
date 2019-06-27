import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResultComponent } from './upload-result.component';

describe('UploadResultComponent', () => {
  let component: UploadResultComponent;
  let fixture: ComponentFixture<UploadResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
