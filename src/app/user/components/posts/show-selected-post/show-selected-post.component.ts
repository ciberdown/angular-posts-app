import { Component, ErrorHandler, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostsServiceService } from '../posts-service.service';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-selected-post',
  templateUrl: './show-selected-post.component.html',
  styleUrls: ['./show-selected-post.component.scss'],
})
export class ShowSelectedPostComponent implements OnInit {
  selctedPost: Post | undefined;
  loading: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsServiceService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: string = params['id'];

      if (id) {
        this.getSinglePostObs(id)
          .pipe(catchError(this.postsService.handleError))
          .subscribe((post) => {
            this.selctedPost = post;
            this.loading = false;
          });
      }
    });
  }

  getSinglePostObs(endpoint: string): Observable<Post> {
    this.loading = true;
    const res = this.http.get<Post>(this.postsService.url + '/' + endpoint);
    return res;
  }
  getPostCommentsObs(){

  }
}
