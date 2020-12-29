import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPort } from 'src/app/_models/port';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { PortService } from 'src/app/_services/port.service';

@Component({
  selector: 'app-port-list',
  templateUrl: './port-list.component.html',
  styleUrls: ['./port-list.component.css']
})
export class PortListComponent implements OnInit {
  ports: IPort[];
  p: number = 1;

  constructor(private portService: PortService,
    private alertify: AlertifyService,
    private http: HttpClient) { }

    ngOnInit() : void{
      this.getPorts();
    }
    getPorts() {
      this.portService.getPorts().subscribe((port: IPort[]) => {
        this.ports = port;
      }, error => {
         this.alertify.error(error);
      });
    }

    deletePost(id: number) {
      this.alertify.confirm('Are you sure you want to delete post', () => {
        this.portService.deletePort(id).subscribe(() => {
          this.ports.splice(this.ports.findIndex(c => c.id === id), 1);
          this.alertify.success('Post has been deleted');
          }, error => {
           this.alertify.error(error);
          });
      });
    }
}
