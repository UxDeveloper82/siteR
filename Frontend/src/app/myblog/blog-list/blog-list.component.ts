import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/_models/blog';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MyblogService } from 'src/app/_services/myblog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];
  filteredBlogs: Blog[];
  constructor(private userService: UserService, private authService: AuthService, private myblogService: MyblogService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
      // this.getBlogs();
      this.route.data.subscribe(data => {
        // tslint:disable-next-line:no-string-literal
        this.blogs = data['blogs'];
      });
  }

   // getBlogs() {
  //     this.userService.getBlogs(this.authService.decodedToken.nameid).subscribe((blogs: Blog[]) => {
  //       this.blogs = blogs;
  //     }, error => {
  //       console.log(error);
  //     });
  //   }

}
