import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayFormComponent } from './overlay-form.component';

describe('OverlayComponent', () => {
  let component: OverlayFormComponent;
  let fixture: ComponentFixture<OverlayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
