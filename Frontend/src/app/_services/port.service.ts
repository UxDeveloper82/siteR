import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Port } from '../_models/port';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortService {
  baseUrl = environment.apiUrl;
  port: Port[];

constructor(private http: HttpClient) { }

getPorts(): Observable<Port[]> {
    return this.http.get<Port[]>(this.baseUrl + 'ports');
 }

 getPort(id): Observable<Port> {
   return this.http.get<Port>(this.baseUrl + 'ports/' + id);
 }

 // tslint:disable-next-line: typedef
 updatePorts(port: Port) {
   return this.http.put(this.baseUrl + 'ports/' + port.id, port);
 }

}
