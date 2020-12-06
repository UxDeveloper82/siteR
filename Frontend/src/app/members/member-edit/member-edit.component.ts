import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  photoUrl: string;
  @HostListener('window:beforeunload', ['$event'])
  // tslint:disable-next-line: typedef
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private authService: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.user = data['user'];
   });
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  // tslint:disable-next-line: typedef
  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
       this.alertify.success('Profile updated successfully');
       this.editForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    });
  }

  // tslint:disable-next-line: typedef
  updateMainPhoto(photoUrl) {
    this.user.photoUrl = photoUrl;
  }

}
