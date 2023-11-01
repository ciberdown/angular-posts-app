import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../posts-service.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  @Input() post!: Post;
  constructor() {}
  ngOnInit(): void {}

  onRemovePost(){
    
  }
}
