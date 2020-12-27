import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { IPort } from 'src/app/_models/port';
import { PortService } from 'src/app/_services/port.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-portfolio-update',
  templateUrl: './portfolio-update.component.html',
  styleUrls: ['./portfolio-update.component.css']
})
export class PortfolioUpdateComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  port: IPort;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private alertify: AlertifyService,
              private portService: PortService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.port = data['port'];
    });
  }

  // tslint:disable-next-line: typedef
  loadPort() {
    // tslint:disable-next-line: no-string-literal
    this.portService.getPort(+this.route.snapshot['id']).subscribe((port: IPort) => {
      this.port = port;
    }, error => {
      this.alertify.error(error);
    });

  }

    // tslint:disable-next-line: typedef
    updatePort() {
      this.portService.updatePorts(this.authService.decodedToken.nameid, this.port).subscribe(next => {
         this.alertify.success('Portfolio successfully updated');
      }, error => {
        this.alertify.error(error);
      });
    }

}
