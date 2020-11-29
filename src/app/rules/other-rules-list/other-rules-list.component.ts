import { Component, Input, OnInit } from '@angular/core';
import { Rule } from 'src/app/_classes/rule';

@Component({
  selector: 'app-other-rules-list',
  templateUrl: './other-rules-list.component.html',
  styleUrls: ['./other-rules-list.component.css']
})
export class OtherRulesListComponent implements OnInit {
  @Input() rules: Rule[];
  filteredRules : Rule[];

  filterName: string = "";
  filterTag: string = "";
  onlyLeagueRules: boolean = false;
  onlyOficial: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
