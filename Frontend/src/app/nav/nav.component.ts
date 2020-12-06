import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  navbarOpen = false;
  model: any = {};
  photoUrl: string;

  constructor(public authService: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }
  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }


   // tslint:disable-next-line: typedef
   loggedIn() {
     const token = localStorage.getItem('token');
     return !!token;
   }

   // tslint:disable-next-line: typedef
   logout() {
     localStorage.removeItem('token');
     localStorage.removeItem('user');
     this.authService.decodedToken = null;
     this.authService.currentUser = null;
     this.alertify.message('logout');
     this.router.navigate(['/home']);
   }
}
