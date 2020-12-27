import {Injectable} from '@angular/core';
import { IPort } from '../_models/port';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../_services/user.service';
import { PortService } from '../_services/port.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PortDetailResolver implements Resolve<IPort> {
    constructor(private userService: UserService,
                private router: Router,
                private portService: PortService,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<IPort> {
        // tslint:disable-next-line: no-string-literal
        return this.portService.getPort(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
