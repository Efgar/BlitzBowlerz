import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueRuleListComponent } from './league-rule-list.component';

describe('LeagueRuleListComponent', () => {
  let component: LeagueRuleListComponent;
  let fixture: ComponentFixture<LeagueRuleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueRuleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueRuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
