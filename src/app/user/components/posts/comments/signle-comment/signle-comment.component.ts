import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../comments.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signle-comment',
  templateUrl: './signle-comment.component.html',
  styleUrls: ['./signle-comment.component.scss'],
})
export class SignleCommentComponent implements OnInit {

  @Input() comment!: Comment;

  constructor() {}

  ngOnInit(): void {

  }
}
