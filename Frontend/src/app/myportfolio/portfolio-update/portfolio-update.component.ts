import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Port } from 'src/app/_models/port';
import { PortService } from 'src/app/_services/port.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-portfolio-update',
  templateUrl: './portfolio-update.component.html',
  styleUrls: ['./portfolio-update.component.css']
})
export class PortfolioUpdateComponent implements OnInit {
  editForm: NgForm;
  port: Port;

  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
              private portService: PortService, private router: Router) { }

  ngOnInit(): void {
    this.loadPort();
  }

  // tslint:disable-next-line: typedef
  loadPort() {
    // tslint:disable-next-line: no-string-literal
    this.portService.getPort(+this.route.snapshot['id']).subscribe((port: Port) => {
      this.port = port;
    }, error => {
      this.alertify.error(error);
    });

  }

    // tslint:disable-next-line: typedef
    updatePort() {
      this.portService.updatePorts(this.port).subscribe(next => {
         this.alertify.success('Portfolio successfully updated');
      }, error => {
        this.alertify.error(error);
      });
    }

}
