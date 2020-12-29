import { AuthService } from '../_services/auth.service';
import { PortService } from '../_services/port.service';
import { AlertifyService } from '../_services/alertify.service';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { IPort } from '../_models/port';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PortEditResolver implements Resolve<IPort> {
    constructor(private portService: PortService, private router: Router,
                private alertify: AlertifyService, private authService: AuthService) {}

                resolve(route: ActivatedRouteSnapshot): Observable<IPort> {
                    return this.portService.getPort(this.authService.decodedToken.nameid).pipe(
                        catchError(error => {
                            this.alertify.error('Problem retrieving your data');
                            this.router.navigate(['/admin/port/lists']);
                            return of(null);
                        })
                    );
                }
}
