import { Component, OnInit } from '@angular/core';
import { Post, PostsServiceService } from './posts-service.service';
import { catchError, retry } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = []
  constructor(private postsService: PostsServiceService) {}

  ngOnInit(): void {
    this.postsService
      .getPostsObs()
      .pipe(retry(3), catchError(this.postsService.handleError))
      .subscribe((res) => {
        if (res) {
          this.posts = res as Post[];
        }
      });
  }
}
