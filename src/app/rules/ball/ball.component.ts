import { Component, Input, OnInit } from '@angular/core';
import { Ball } from '../../_classes/ball';
import { Flag } from '../../_classes/flag';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {
  @Input() ball: Ball;
  hombreFlag = Flag.HOMEBREW;

  constructor() { }

  ngOnInit(): void {
  }
}
