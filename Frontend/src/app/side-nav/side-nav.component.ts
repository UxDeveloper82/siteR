import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  pagesOpen = false;
  postsOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  togglePages() {
    this.pagesOpen = !this.pagesOpen;
  }

  // tslint:disable-next-line: typedef
  togglePost(){
    this.postsOpen = !this.postsOpen;
  }

}
