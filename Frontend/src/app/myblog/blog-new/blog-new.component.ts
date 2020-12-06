import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/_services/upload-image.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { MyblogService } from 'src/app/_services/myblog.service';
import { Blog } from 'src/app/_models/blog';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent implements OnInit {
  blog: Blog[];
  model: any = {};
  constructor(private myblogService: MyblogService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }

   // tslint:disable-next-line: typedef
  createPost() {
    this.myblogService.createPost(this.model).subscribe(() => {
    this.alertify.success('New Post Created');
    this.router.navigate(['/blog']);
    }, error => {
      this.alertify.error(error);
    });
 }

}
