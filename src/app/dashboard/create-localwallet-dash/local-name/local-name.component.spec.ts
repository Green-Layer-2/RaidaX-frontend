import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalNameComponent } from './local-name.component';

describe('LocalNameComponent', () => {
  let component: LocalNameComponent;
  let fixture: ComponentFixture<LocalNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
