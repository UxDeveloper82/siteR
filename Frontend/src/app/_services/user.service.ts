import { Mymessages } from '../_models/mymessage';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../_models/user';
import { Message} from '../_models/message';
import { PaginatedResult } from '../_models/pagination';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    baseUrl = 'http://icreatesites4u.com/api/';

constructor(private http: HttpClient) { }

  getUsers(page?, itemsPerPage?, userParams?, likesParam?): Observable<PaginatedResult<User[]>> {
     const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();

     let params = new HttpParams();

     if (page != null && itemsPerPage != null) {
       params = params.append('pageNumber', page);
       params = params.append('pageSize', itemsPerPage);
     }

     if (userParams != null)
     {
        params = params.append('minAge', userParams.minAge);
        params = params.append('maxAge', userParams.maxAge);
        params = params.append('gender', userParams.gender);
        params = params.append('orderBy', userParams.orderBy);
     }

     if (likesParam === 'Likers') {
       params = params.append('Likers', 'true');
     }
     if (likesParam === 'Likees') {
       params = params.append('Likees', 'true');
     }

     return this.http.get<User[]>(this.baseUrl + 'users', { observe: 'response', params})
         .pipe(
           map(response => {
              paginatedResult.result = response.body;
              if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('pagination'));
              }
              return paginatedResult;
           })
         );
   }
  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }
  // tslint:disable-next-line: typedef
  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'users/' + id, user);
  }

  // tslint:disable-next-line: typedef
  setMainPhoto(userId: number, id: number) {
     return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
  }

  // tslint:disable-next-line: typedef
  deletePhoto(userId: number, id: number) {
    return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
  }

  // tslint:disable-next-line: typedef
  sendLike(id: number, recipientId: number) {
     return this.http.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {});
  }

  // tslint:disable-next-line: typedef
  getMessages(id: number, page?, itemsPerPage?, messageContainer?) {
     const paginatedResult: PaginatedResult<Message[]> = new PaginatedResult<Message[]>();

     let params = new HttpParams();

     params = params.append('MessageContainer', messageContainer);

     if (page != null && itemsPerPage != null) {
       params = params.append('pageNumber', page);
       params = params.append('pageSize', itemsPerPage);
     }
     return this.http.get<Message[]>(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params})
         .pipe(
           map(response => {
             paginatedResult.result = response.body;
             if (response.headers.get('Pagination') != null) {
               paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
             }
             return paginatedResult;
           })
         );
  }

  // tslint:disable-next-line: typedef
  getMessageThread(id: number, recipientId: number) {
      return this.http.get<Message[]>(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId);
  }

  // tslint:disable-next-line: typedef
  sendMessage(id: number, message: Message) {
    return this.http.post(this.baseUrl + 'users/' + id + '/messages', message);
  }

  // tslint:disable-next-line: typedef
  deleteMessage(id: number, userId: number) {
     return this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
  }

  // tslint:disable-next-line: typedef
  markAsRead(userId: number, messageId: number) {
    return this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + messageId + '/read', {});
  }

   // tslint:disable-next-line: typedef
   messageSend(model: any) {
      return this.http.post(this.baseUrl + 'messageme', model);
   }

   myMessages(): Observable<Mymessages[]> {
     return this.http.get<Mymessages[]>(this.baseUrl + 'messageme');
   }

   // tslint:disable-next-line: typedef
   removeMessage(id: number) {
    return this.http.delete(this.baseUrl + 'messageme/' + id );
  }

}
