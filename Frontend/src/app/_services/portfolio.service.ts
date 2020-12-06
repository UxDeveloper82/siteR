import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../_models/portfolio';
import { Repair } from '../_models/repair';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
     baseUrl = 'data/repairs.json';
     repairs: Repair[];

constructor(private http: HttpClient) { }

    getPortfolio(): Observable<Portfolio[]> {
      return this.http.get<Portfolio[]>(this.baseUrl + 'portfolio');
    }

    getRepair(): Observable<Repair[]>{
        return this.http.get<Repair[]>(this.baseUrl).pipe(
        map(data => {
        const repairArray: Array<Repair> = [];
        const localRepair = JSON.parse(localStorage.getItem('newProp'));
        }
      });


