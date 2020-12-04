import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RulesService } from 'src/app/_services/rules.service';
import { Challenge } from '../../_classes/challenge';

@Component({
  selector: 'app-challenge-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css', '../common-styles.css']
})
export class ChallengeListComponent implements OnInit {
  challenges: Challenge[];
  endgameChallenges: Challenge[] = [];
  midgameChallenges: Challenge[] = [];

  filterName: string = "";
  filterPoints: number;
  onlyOficial: boolean = false;
  onlyEndgame: boolean = false;

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
    this.challenges = this.rulesService.getChallengeCards();
    this.filterChallenges();
  }

  filterChallenges(): void {
    var aux: Challenge[] = this.challenges
      .filter(challenge => {
          var nameMatcher = new RegExp(this.filterName.toLowerCase(), 'g');
          return (challenge.bonusPlayName.toLowerCase().match(nameMatcher) || challenge.name.toLowerCase().match(nameMatcher)) &&
            (this.filterPoints ? challenge.points == this.filterPoints : true) &&
            (this.onlyOficial ? challenge.isHomebrew == false : true) &&
            (this.onlyEndgame ? challenge.isEndGame == true : true);

        }
      );
    this.splitChallenges(aux);
  }

  private splitChallenges(challenges: Challenge[]): void {
    this.endgameChallenges = [];
    this.midgameChallenges = [];
    for (let challenge of challenges) {
      if (challenge.isEndGame) {
        this.endgameChallenges.push(challenge);
      } else {
        this.midgameChallenges.push(challenge);
      }
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  clearPoints() {
    this.filterPoints = null;
    this.filterChallenges();
  }

  clearName() {
    this.filterName = "";
    this.filterChallenges();
  }

}
