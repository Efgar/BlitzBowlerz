import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MatAccordion } from '@angular/material/expansion';
import { Team } from '../../_classes/team';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() team: Team;
  
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
