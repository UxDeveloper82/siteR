import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // users: User[];
  slidesStore = [
    {image: 'assets/images/testimonials/t1.jpg',
     testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.',
     name: 'Kevin Martin'},
    {image: 'assets/images/testimonials/t2.jpg',
    testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.',
    name: 'John Martin'},
    {image: 'assets/images/testimonials/t1.jpg',
    testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.',
    name: 'Kevin Martin'},
    {image: 'assets/images/testimonials/t2.jpg',
    testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.',
    name: 'John Martin'},
    {image: 'assets/images/testimonials/t1.jpg',
    testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.',
    name: 'Kevin Martin'},
    {image: 'assets/images/testimonials/t2.jpg',
    testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.',
    name: 'John Martin'},
    {image: 'assets/images/testimonials/t1.jpg',
    testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.',
    name: 'Kevin Martin'},
    {image: 'assets/images/testimonials/t2.jpg',
    testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.',
    name: 'John Martin'},
    {image: 'assets/images/testimonials/t1.jpg',
    testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.',
    name: 'Kevin Martin'},
    {image: 'assets/images/testimonials/t2.jpg',
    testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.',
    name: 'John Martin'}
  ];
  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    // this.loadUsers();
  }

   // tslint:disable-next-line: typedef
  // loadUsers() {
  //   this.userService.getUsers().subscribe((users: User[]) => {
  //      this.users = users;
  //   }, error => {
  //      this.alertify.error(error);
  //   });
  // }
}


