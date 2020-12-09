import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  registerMode = false;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  // tslint:disable-next-line: typedef
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
