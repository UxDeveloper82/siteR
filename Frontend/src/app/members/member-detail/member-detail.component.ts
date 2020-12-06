import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('memberTabs', {static: true}) memberTabs: TabsetComponent;
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.data.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.user = data['user'];
  });

    this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      const selectedTab = params['tab'];
      this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
  });

    this.galleryOptions = [
    {
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
    },
    // max-width 400
    {
        breakpoint: 300,
        preview: false
    }
 ];
    this.galleryImages = this.getImages();
}

    // tslint:disable-next-line: typedef
    getImages() {
    const imageUrls = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.photos.length; i++) {
      imageUrls.push({
        small: this.user.photos[i].url,
        medium: this.user.photos[i].url,
        big: this.user.photos[i].url,
        description: this.user.photos[i].description
      });
    }
    return imageUrls;
    }

    // tslint:disable-next-line: typedef
    selectTab(tabId: number) {
      this.memberTabs.tabs[tabId].active = true;
    }
}




