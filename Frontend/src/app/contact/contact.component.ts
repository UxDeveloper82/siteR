import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: any = {};
  constructor(private userService: UserService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  sendMessage() {
     this.userService.messageSend(this.model).subscribe(() => {
     this.alertify.success('Message Send');
     this.router.navigate(['/home']);
     }, error => {
       this.alertify.error(error);
     });
  }

}
