import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocalwalletComponent } from './create-localwallet.component';

describe('CreateLocalwalletComponent', () => {
  let component: CreateLocalwalletComponent;
  let fixture: ComponentFixture<CreateLocalwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLocalwalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLocalwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
