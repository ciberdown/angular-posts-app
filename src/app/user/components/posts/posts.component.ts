import { Component } from '@angular/core';
import { Post, PostsServiceService } from './posts-service.service';
import { Observable, catchError, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  loading: boolean = false;
  posts: Post[] = [];
  constructor(
    private postsService: PostsServiceService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.getPostsObs()
      .pipe(retry(3), catchError(this.postsService.handleError))
      .subscribe((res) => {
        this.loading = false;
        if (res) {
          this.posts = res as Post[];
        }
      });
  }

  getPostsObs(): Observable<Object> {
    this.loading = true;
    const res = this.http.get(this.postsService.url);
    return res;
  }
}
