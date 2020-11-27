import { Component, Input, OnInit } from '@angular/core';
import { Ball } from '../../_classes/ball';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {
  @Input() ball: Ball;

  constructor() { }

  ngOnInit(): void {
  }
}
