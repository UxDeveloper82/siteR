import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPort } from '../_models/port';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortService {
  baseUrl = 'http://icreatesites4u.com/api/';
  port: IPort[];

constructor(private http: HttpClient) { }

getPorts(): Observable<IPort[]> {
    return this.http.get<IPort[]>(this.baseUrl + 'ports');
 }

 getPort(id): Observable<IPort> {
   return this.http.get<IPort>(this.baseUrl + 'ports/' + id);
 }

 // tslint:disable-next-line: typedef
 updatePorts(id: number, port: IPort) {
   return this.http.put(this.baseUrl + 'ports/' + id, port);
 }

}
