import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { Message} from './../_models/message';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MessagesResolver implements Resolve<Message[]> {
    pageNumber = 1;
    pageSize = 5;
    messageContainer = 'Unread';

    constructor(private userService: UserService, private router: Router,
                private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
       return this.userService.getMessages(this.authService.decodedToken.nameid,
       this.pageNumber, this.pageSize, this.messageContainer).pipe(
           catchError(error => {
               this.alertify.error('Proble retrieving messages');
               this.router.navigate(['/home']);
               return of(null);
           })
       );
    }
}
