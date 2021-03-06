import { Component, Input, OnInit } from '@angular/core';
import { RulesService } from 'src/app/_services/rules.service';
import { Ball } from '../../_classes/ball';

@Component({
  selector: 'app-ball-list',
  templateUrl: './ball-list.component.html',
  styleUrls: ['./ball-list.component.css', '../common-styles.css']
})
export class BallListComponent implements OnInit {
  balls: Ball[];
  filteredBalls: Ball[] = [];

  filterName: string = "";
  filterRace: string = "";
  onlyOficial: boolean = false;

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
    this.balls = this.rulesService.getBallRules();
    this.filterBall();
  }

  filterBall(): void {
    this.filteredBalls = this.balls
      .filter(ball => {
          var nameMatcher = new RegExp(this.filterName.toLowerCase(), 'g');
          var raceMatcher = new RegExp(this.filterRace.toLowerCase(), 'g');
          return (ball.name.toLowerCase().match(nameMatcher) || ball.name.toLowerCase().match(nameMatcher)) &&
            (ball.race.toLowerCase().match(raceMatcher) || ball.race.toLowerCase().match(raceMatcher)) &&
            (this.onlyOficial ? ball.isHomebrew == false : true);

        }
      );
  }

  clearTeam() {
    this.filterRace = "";
    this.filterBall();
  }

  clearName() {
    this.filterName = "";
    this.filterBall();
  }
}
