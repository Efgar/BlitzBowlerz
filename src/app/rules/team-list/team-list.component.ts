import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Team } from '../../_classes/team';
import { Flag } from '../../_classes/flag';
import { RulesService } from 'src/app/_services/rules.service';

@Component({
  selector: 'app-team-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css', '../common-styles.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[];
  filteredTeams: Team[] = [];

  filterName: string = "";
  filterRace: string = "";
  onlyOficial: boolean = false;
  includeBeta: boolean = true;

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
    this.teams = this.rulesService.getTeams();
    this.filterTeams()
  }

  filterTeams(){
    this.filteredTeams =  this.teams.filter( team => {
      var nameMatcher = new RegExp(this.filterName.toLowerCase(), 'g');
      var raceMatcher = new RegExp(this.filterRace.toLowerCase(), 'g');

      return team.name.toLowerCase().match(nameMatcher) &&
            team.race.toString().toLowerCase().match(raceMatcher) &&
            (this.onlyOficial && team.flags?.length > 0 ? team.flags?.indexOf(Flag.HOMEBREW) < 0 : true) &&
            (!this.includeBeta && team.flags?.length > 0 ? team.flags?.indexOf(Flag.BETA) < 0 : true)
    });
  }

  clearPoints() {
    this.filterRace = "";
    this.filterTeams();
  }

  clearName() {
    this.filterName = "";
    this.filterTeams();
  }

}
