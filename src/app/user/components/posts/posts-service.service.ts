import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsServiceService {
  public readonly url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPostsObs(): Observable<Object> {
    const res = this.http.get(this.url);
    return res;
  }
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error,
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.'),
    );
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}