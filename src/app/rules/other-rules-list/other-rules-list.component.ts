import { Component, Input, OnInit } from '@angular/core';
import { CoachTrait } from 'src/app/_classes/coach-trait';
import { Flag } from 'src/app/_classes/flag';
import { Rule } from 'src/app/_classes/rule';
import { RulesService } from 'src/app/_services/rules.service';

@Component({
  selector: 'app-other-rules-list',
  templateUrl: './other-rules-list.component.html',
  styleUrls: ['./other-rules-list.component.css']
})
export class OtherRulesListComponent implements OnInit {
  rules: Rule[];
  coachTraits: CoachTrait[];
  filteredRules : Rule[];
  filteredTraits : CoachTrait[];
  hombrewFlag = Flag.HOMEBREW;

  filterName: string = "";
  filterTag: string = "";
  onlyLeagueRules: boolean = false;
  onlyOficial: boolean = false;

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
    this.rules = this.rulesService.getOtherRules();
    this.coachTraits = this.rulesService.getCoachTrait();
    this.filterRules();
  }

  filterRules(): void {
    this.filteredRules = this.rules
      .filter(rule => {
          var nameMatcher = new RegExp(this.filterName.toLowerCase(), 'g');
          var tagMatcher = new RegExp(this.filterTag.toLowerCase(), 'g');
          var leagueMatcher = new RegExp("league", 'g');
          return (rule.name.toLowerCase().match(nameMatcher) || rule.sumary.toLowerCase().match(nameMatcher)) &&
            rule.tags?.toString().toLowerCase().match(tagMatcher) &&
            (this.onlyOficial ? rule.isHomebrew == false : true) &&
            (this.onlyLeagueRules ? rule.tags?.toString().toLowerCase().match(leagueMatcher): true);
        }
      );

      
    this.filteredTraits = this.coachTraits
    .filter(trait => {
        return (this.onlyOficial ? trait.isHomebrew == false : true);
      }
    );
  }

  clearTag() {
    this.filterTag = "";
    this.filterRules();
  }

  clearName() {
    this.filterName = "";
    this.filterRules();
  }

}
