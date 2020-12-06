import { AlertifyService } from '../_services/alertify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Blog } from '../_models/blog';
import { MyblogService } from '../_services/myblog.service';


@Injectable()
export class BlogListResolver implements Resolve<Blog[]> {
    constructor(private userService: UserService, private myblogService: MyblogService,
                private router: Router, private alertify: AlertifyService) {}

         resolve(route: ActivatedRouteSnapshot): Observable<Blog[]> {
            // tslint:disable-next-line:no-string-literal
            return this.myblogService.getBlogs().pipe(
             catchError(error => {
                 this.alertify.error('Problem retrieving data');
                 this.router.navigate(['/home']);
                 return of(null);
             })
            );
         }
}
