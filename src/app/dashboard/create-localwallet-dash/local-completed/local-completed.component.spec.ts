import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCompletedComponent } from './local-completed.component';

describe('LocalCompletedComponent', () => {
  let component: LocalCompletedComponent;
  let fixture: ComponentFixture<LocalCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
