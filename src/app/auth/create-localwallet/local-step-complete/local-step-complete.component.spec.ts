import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStepCompleteComponent } from './local-step-complete.component';

describe('LocalStepCompleteComponent', () => {
  let component: LocalStepCompleteComponent;
  let fixture: ComponentFixture<LocalStepCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalStepCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalStepCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
