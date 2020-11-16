import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Team } from '../_classes/team';
import { RulesService } from '../_services/rules.service';
import { Challenge } from '../_classes/challenge';
import { Ball } from '../_classes/ball';

@Component({
  selector: 'app-rules-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './rules-dashboard.component.html',
  styleUrls: ['./rules-dashboard.component.css']
})
export class RulesDashboardComponent implements OnInit {
  teams: Team[];
  ballCards: Ball[];
  challenges: Challenge[];

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
    this.teams = this.rulesService.getTeams();
    this.ballCards = this.rulesService.getBallRules();
    this.challenges = this.rulesService.getChallengeCards();
  }
}
