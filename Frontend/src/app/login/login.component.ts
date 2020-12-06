import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login() {
    this.authService.login(this.model).subscribe(next => {
       this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/panel']);
    });
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
     this.alertify.message('logout');
     this.router.navigate(['/home']);
   }

}
