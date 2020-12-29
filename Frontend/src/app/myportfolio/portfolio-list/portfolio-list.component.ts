import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { IPort } from 'src/app/_models/port';
import { PortService } from 'src/app/_services/port.service';
import { HttpClient } from '@angular/common/http';
import { IPagination } from 'src/app/_models/ipagination';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {
  ports: IPort[];

constructor(private portService: PortService,
            private alertify: AlertifyService,
            private route: ActivatedRoute,
            private http: HttpClient) { }

  ngOnInit() : void{
    this.getPorts();
    // this.route.data.subscribe(data => {
    //   // tslint:disable-next-line:no-string-literal
    //   this.ports = data['ports'];
    // })
  }
  getPorts() {
    this.portService.getPorts().subscribe((port: IPort[]) => {
      this.ports = port;
    }, error => {
       this.alertify.error(error);
    });
  }

}
