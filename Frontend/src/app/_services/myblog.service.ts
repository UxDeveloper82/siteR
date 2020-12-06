import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class MyblogService {
  baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

getBlogs(): Observable<Blog[]> {
  return this.http.get<Blog[]>(this.baseUrl + 'blogs');
}

getBlog(id): Observable<Blog> {
  return this.http.get<Blog>(this.baseUrl + 'blogs/' + id);
}

// tslint:disable-next-line: typedef
createPost(model: any) {
  return this.http.post(this.baseUrl + 'blogs', model);
}

}
