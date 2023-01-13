import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidaStatusComponent } from './raida-status.component';

describe('RaidaStatusComponent', () => {
  let component: RaidaStatusComponent;
  let fixture: ComponentFixture<RaidaStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidaStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
