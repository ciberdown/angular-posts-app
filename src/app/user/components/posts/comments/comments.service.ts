import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from './comments.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  commentsSubject = new Subject<Comment[]>();
  selectedPostIdSubject = new Subject<number>();
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {}

  subscribeToCommentsObs(id: number) {
    const endpoint: string = '/' + id + '/comments';
    const obs = this.http
      .get<Comment[]>(this.url + endpoint)
      .subscribe((data) => {
        this.commentsSubject.next(data);
      });
  }
}
