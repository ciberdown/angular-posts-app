import { Component, Input, OnInit } from '@angular/core';
import { Comment } from './comments.model';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  id: number | undefined;
  fetchingData: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: number = +params['id'];
      this.commentsService.selectedPostIdSubject.next(id);
      if (id) {
        this.fetchingData = true;
        this.commentsService.subscribeToCommentsObs(id);
        this.commentsService.commentsSubject.subscribe((comments) => {
          this.comments = comments;
          this.fetchingData = false;
        });
      }
    });
  }
}
