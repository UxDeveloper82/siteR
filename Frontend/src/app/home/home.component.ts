import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    repairs = [
      {
          id: '1',
          type: 'Bootstrap 3.7',
          price: 'Call for price',
          address: 'Check Inventory',
          description: 'Powered by Bootstrap most latest version 3.7',
          days: 'Mon-Fri',
          area: 'orlando',
          image: '1'
      },
      {
          id: '2',
          type: 'JQuery 3+',
          price: '$32.00',
          address: 'Check Inventory',
          description: 'Template is fully customized according to latest Jquery.',
          days: 'Mon-Fri',
          area: 'orlando',
          image: '2'
      },
      {
          id: 3,
          type: 'SEO Friendly',
          price: '$44.00',
          address: 'Check Inventory',
          description: 'We have coded this template with Best SEO practices',
          days: 'Mon-Fri',
          area: 'orlando',
          image: '3'
      },
      {
          id: 4,
          type: '100% Responsive',
          price: '$102.00',
          address: 'Check Inventory',
          description: 'Fully responsive layout using default Bootstrap grid layout.',
          days: 'Mon-Fri',
          area: 'orlando',
          image: '4'
      },
      {
          id: 5,
          type: 'High Performance',
          price: '$98.00',
          address: 'Check Inventory',
          description: 'Users\' experience in terms of your site Based On GTMetrix',
          days: 'Mon-Fri',
          area: 'orlando',
          image: '5'
      },
      {
          id: 6,
          type: 'Fully Customizable',
          price: '$155.00',
          address: 'Check Inventory',
          description: 'Control easily the size by using default Bootstrap grid layout.',
          days: 'Mon-Fri',
          area: 'orlando',
          image: '6'
      },
      {
          id: 7,
          type: 'Easy To Use',
          price: '$322.00',
          address: 'Check Inventory',
          description: 'Fully documention and premium support 24/7.',
          days: 'Mon-Fri',
          area: 'orlando',
          image: '7'
      },
      {
          id: 8,
          type: 'Unlimited Options',
          price: '$129.00',
          address: 'Check Inventory',
          description: 'A large range of options and more are coming with your feedbacks.',
          days: 'Mon-Fri',
          area: 'orlando',
          image: '8'
      }
  ];

  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
        {
          width: '730px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
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
    this.galleryImages = [
       {
         small: 'assets/images/img/img1.jpeg',
         medium: 'assets/images/img/img1.jpeg',
         big: 'assets/images/img/img1.jpeg'
     },
     {
         small: 'assets/images/img/img2.jpeg',
         medium: 'assets/images/img/img2.jpeg',
         big: 'assets/images/img/img2.jpeg'
     },
     {
         small: 'assets/images/img/img3.jpeg',
         medium: 'assets/images/img/img3.jpeg',
         big: 'assets/images/img/img3.jpeg'
     },
     {
       small: 'assets/images/img/img4.jpeg',
       medium: 'assets/images/img/img4.jpeg',
       big: 'assets/images/img/img4.jpeg'
     }
      ];
     }

}
