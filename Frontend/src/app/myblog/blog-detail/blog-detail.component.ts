import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/_models/blog';
import { MyblogService } from 'src/app/_services/myblog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  constructor(private userService: UserService, private myblogService: MyblogService,
              private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadBlog();
  }

  // tslint:disable-next-line: typedef
  loadBlog() {
    // tslint:disable-next-line:no-string-literal
    this.myblogService.getBlog(+this.route.snapshot.params['id']).subscribe((blog: Blog) => {
      this.blog = blog;
    }, error => {
      this.alertify.error(error);
    });
  }

}
