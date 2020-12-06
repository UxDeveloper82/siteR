import { Component, OnInit } from '@angular/core';
import { Mymessages } from '../_models/mymessage';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mymessages',
  templateUrl: './mymessages.component.html',
  styleUrls: ['./mymessages.component.css']
})
export class MymessagesComponent implements OnInit {
  mymessages: Mymessages[];
  constructor(private userService: UserService,
              private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMessages();
  }

  // tslint:disable-next-line: typedef
  getMessages() {
    this.userService.myMessages().subscribe((mymessages: Mymessages[]) => {
       this.mymessages = mymessages;
    }, error => {
      this.alertify.error(error);
    });
  }

  // tslint:disable-next-line: typedef
  deleteMessage(id: number) {
    this.alertify.confirm('Are you sure you want to delete this message', () => {
      this.userService.removeMessage(id).subscribe(() => {
        this.mymessages.splice(this.mymessages.findIndex(c => c.id === id), 1);
        this.alertify.success('Message been deleted');
      }, error => {
          this.alertify.error(error);
      });
    });
  }

}
