import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from 'ngx-gallery-9';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { IPort } from 'src/app/_models/port';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css'],
})
export class PortfolioDetailComponent implements OnInit {
  @ViewChild('memberTabs', { static: true }) memberTabs: TabsetComponent;
  port: IPort;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.data.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.port = data['port'];
    });

    this.galleryOptions = [
      {
        width: '730px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 300,
        preview: false,
      },
    ];
    this.galleryImages = this.getImages();
  }
  // tslint:disable-next-line: typedef
  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.port.portPhotos.length; i++) {
      imageUrls.push({
        small: this.port.portPhotos[i].url,
        medium: this.port.portPhotos[i].url,
        big: this.port.portPhotos[i].url,
        description: this.port.portPhotos[i].description,
      });
    }
    return imageUrls;
  }
}
