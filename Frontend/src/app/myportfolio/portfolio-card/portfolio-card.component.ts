import { Component, Input, OnInit } from '@angular/core';
import { IPort } from 'src/app/_models/port';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit {
  @Input() port: IPort;
  constructor() { }

  ngOnInit(): void {
  }

}
