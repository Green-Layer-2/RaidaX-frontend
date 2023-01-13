import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocalwalletDashComponent } from './create-localwallet-dash.component';

describe('CreateLocalwalletDashComponent', () => {
  let component: CreateLocalwalletDashComponent;
  let fixture: ComponentFixture<CreateLocalwalletDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLocalwalletDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLocalwalletDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
