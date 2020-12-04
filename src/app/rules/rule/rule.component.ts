import { Component, Input, OnInit } from '@angular/core';
import { Flag } from 'src/app/_classes/flag';
import { Rule } from 'src/app/_classes/rule';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
  @Input() rule: Rule;
  hombreFlag = Flag.HOMEBREW;

  constructor() { }

  ngOnInit(): void {
  }

}
