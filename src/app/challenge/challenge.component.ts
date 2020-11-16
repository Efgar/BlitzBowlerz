import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../_classes/challenge';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  @Input() challenge: Challenge;

  constructor() { }

  ngOnInit(): void {
  }

}
