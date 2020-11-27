import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueRuleComponent } from './league-rule.component';

describe('LeagueRuleComponent', () => {
  let component: LeagueRuleComponent;
  let fixture: ComponentFixture<LeagueRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
