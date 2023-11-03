import { Component, OnDestroy } from '@angular/core';
import { Post, PostsServiceService } from './posts-service.service';
import { Observable, Subscription, catchError, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnDestroy {
  loading: boolean = false;
  posts: Post[] = [];
  selectedPostId: number | undefined;
  postsSubsciber!: Subscription;

  constructor(
    private postsService: PostsServiceService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.postsSubsciber = this.getPostsObs()
      .pipe(retry(3), catchError(this.postsService.handleError))
      .subscribe((res) => {
        this.loading = false;
        if (res) {
          this.posts = res as Post[];
        }
      });
  }

  getPostsObs(): Observable<Post[]> {
    this.loading = true;
    const res = this.http.get<Post[]>(this.postsService.url);
    return res;
  }

  ngOnDestroy(): void {
    this.postsSubsciber.unsubscribe();
  }
}
