import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { Port } from 'src/app/_models/port';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  showDetails: boolean;
  port: any;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ports = [
    {
        id: '1',
        name: 'Friends-Website',
        type: 'angular',
        detail: 'Asp.net core Application',
        language: 'C#',
        link: 'http://uxdeve82-001-site2.itempurl.com/',
        image: 'Friendsite'
    },
    {
        id: '2',
        name: 'Parts-Inventory',
        type: 'core',
        detail: 'Asp.net Framework Application',
        language: 'C#',
        link: 'http://uxdeve82-001-site5.itempurl.com/',
        image: 'Inventory'
    },
    {
        id: '3',
        name: 'Appliance Web',
        type: 'core',
        detail: 'Asp.net Framework Application',
        language: 'C#',
        link: 'http://orlandoappliancerepair.tech/',
        image: 'orrepair'
    },
    {
        id: '4',
        name: 'BudgetApp',
        type: 'javascript',
        detail: 'Javascript App',
        language: 'Javascript',
        link: 'https://uxdeveloper82.github.io/budgetjs/index.html',
        image: 'budget'
    },
    {
        id: '5',
        name: 'Ecommerce-Desing',
        type: 'javascript',
        detail: 'Javascript App',
        language: 'Javascript',
        link: 'https://uxdeveloper82.github.io/myEcommerce/',
        image: 'ecommerce'
    },
    {
        id: '6',
        name: 'GithubFinder-Desing',
        type: 'javascript',
        detail: 'Javascript App',
        language: 'Javascript',
        link: 'https://uxdeveloper82.github.io/gitFinder-index.html/',
        image: 'githubfinder'
    },
    {
        id: '7',
        name: 'Fix-top',
        type: 'templates',
        detail: 'Javascript App',
        language: 'Html-css',
        link: 'https://uxdeveloper82.github.io/fix-top/',
        image: 'websites'
    },
    {
        id: '8',
        name: 'Photography-light',
        type: 'templates',
        detail: 'Javascript App',
        language: 'Html-css',
        link: 'https://uxdeveloper82.github.io/photography-index.html/',
        image: 'photography'
    },
    {
        id: '9',
        name: 'Numerouno Air',
        type: 'templates',
        detail: 'Javascript App',
        language: 'Html-css',
        link: 'https://uxdeveloper82.github.io/numerouno-index.html/',
        image: 'gitfit'
    },
    {
        id: '10',
        name: 'Split-fown',
        type: 'templates',
        detail: 'Javascript App',
        language: 'Html-css',
        link: 'https://uxdeveloper82.github.io/split-index.html/',
        image: 'slider'
    },
    {
        id: '11',
        name: 'Grid-sign',
        type: 'templates',
        detail: 'Javascript App',
        language: 'Html-css',
        link: 'https://uxdeveloper82.github.io/Grid-index.html/',
        image: 'grid'
    },
    {
        id: '12',
        name: 'Novi-Heaven',
        type: 'templates',
        detail: 'Javascript App',
        language: 'Html-css',
        link: 'https://uxdeveloper82.github.io/novi-index.html/',
        image: 'ui'
    },
    {
        id: '13',
        name: 'Mobil-Male',
        type: 'templates',
        detail: 'Javascript App',
        language: 'Html-css',
        link: 'https://uxdeveloper82.github.io/Acme-w3-index.html/',
        image: 'mobil'
    },
    {
        id: '14',
        name: 'Dom-Manipulating',
        type: 'javascript',
        detail: 'Javascript App',
        language: 'Html-css',
        link: 'https://uxdeveloper82.github.io/DomManipulating/',
        image: 'jsmanipulating'
    },
    {
        id: '15',
        name: 'Dom-Manipulating1',
        type: 'templates',
        detail: 'Javascript App',
        language: 'Html-css',
        link: 'https://uxdeveloper82.github.io/Netflix-clone-index.html',
        image: 'netflixjs'
    },
    {
        id: '16',
        name: 'Animatejs',
        type: 'javascript',
        detail: 'Javascript App',
        language: 'Html-css',
        link: 'https://uxdeveloper82.github.io/image_hide/',
        image: 'image_hide'
    },
    {
        id: '17',
        name: 'Data-table-js',
        type: 'data',
        detail: 'Javascript App',
        language: 'Html-css-js',
        link: 'https://uxdeveloper82.github.io/interactive_table/',
        image: 'interactive_table'
    },
    {
        id: '18',
        name: 'Fetch-data-js',
        type: 'javascript',
        detail: 'Javascript App',
        language: 'Html-css-js',
        link: 'https://uxdeveloper82.github.io/FetchApi/',
        image: 'fetch'
    },
    {
        id: '19',
        name: 'Crud-js',
        type: 'javascript',
        detail: 'Javascript App',
        language: 'Html-css-js',
        link: 'https://uxdeveloper82.github.io/CrudJs/index.html',
        image: 'jscrud'
    },
    {
        id: '20',
        name: 'Axios-js',
        type: 'javascript',
        detail: 'Javascript App',
        language: 'Html-css-js',
        link: 'https://uxdeveloper82.github.io/Axios/',
        image: 'axios'
    },
    {
        id: '20',
        name: 'Slide-js',
        type: 'javascript',
        detail: 'Javascript App',
        language: 'Html-css-js',
        link: 'https://uxdeveloper82.github.io/sliderjs/',
        image: 'slidejs'
    }
];

  constructor(private route: ActivatedRoute, private userService: UserService, private alertify: AlertifyService) { }

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
    // tslint:disable-next-line: typedef
    getImages() {
       const imageUrls = [];
       for (let i = 0; i < this.port.photos.lenght; i++) {
            imageUrls.push({
                small: this.port.photos[i].url,
                medium: this.port.photos[i].url,
                big: this.port.photos[i].url,
                description: this.port[i].description
            });
       }
       return imageUrls;
    }
  }

