import { Component, Input, OnInit } from '@angular/core';
import { Post, PostsServiceService } from '../posts-service.service';
import { HttpClient } from '@angular/common/http';
import { string } from 'prop-types';
import { CommentsService } from '../comments/comments.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  @Input() post!: Post;
  selectedPostId: number | undefined;
  constructor(
    private http: HttpClient,
    private postsService: PostsServiceService,
    private commentsService: CommentsService,
  ) {}
  ngOnInit(): void {
    this.commentsService.selectedPostIdSubject.subscribe((id: number) => {
      this.selectedPostId = id;
    });
  }

  onRemovePost(event: MouseEvent) {
    const endpoint: string = '/' + this.post.id;
    event.preventDefault();
    this.http.delete(this.postsService.url + endpoint);
  }
}
