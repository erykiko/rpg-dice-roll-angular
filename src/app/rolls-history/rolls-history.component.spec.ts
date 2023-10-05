import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollsHistoryComponent } from './rolls-history.component';

describe('RollsHistoryComponent', () => {
  let component: RollsHistoryComponent;
  let fixture: ComponentFixture<RollsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RollsHistoryComponent]
    });
    fixture = TestBed.createComponent(RollsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
