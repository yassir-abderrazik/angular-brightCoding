import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url)
  }
  createPost(post: any) {
    return this.httpClient.post(this.url, post)
  }
  UpdatePost(post: any) {
    return this.httpClient.put(this.url + '/' + post.id, post)
  }
  deletePost(post: any) {
    return this.httpClient.delete(this.url + '/' + post.id).pipe(
      catchError((error: Response) => {
        if(error.status === 404){
          return throwError(new NotFoundError);
        }
        if(error.status === 400){
          return throwError(new AppError);
        }
        return throwError (new AppError);
      }))
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
