import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Comment } from './comments.model';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from './comments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, OnDestroy {
  comments: Comment[] = [];
  id: number | undefined;
  fetchingData: boolean = false;
  subscribers: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService,
  ) {}

  ngOnInit(): void {
    this.subscribers.push(
      this.activatedRoute.params.subscribe((params) => {
        const id: number = +params['id'];
        this.commentsService.selectedPostIdSubject.next(id);
        if (id) {
          this.fetchingData = true;
          this.commentsService.subscribeToCommentsObs(id);
          this.subscribers.push(
            this.commentsService.commentsSubject.subscribe((comments) => {
              this.comments = comments;
              this.fetchingData = false;
            }),
          );
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscribers.forEach((subscriber) => {
      subscriber.unsubscribe();
    });
  }
}
