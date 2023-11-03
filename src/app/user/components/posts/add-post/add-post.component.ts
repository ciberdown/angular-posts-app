import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { PostsServiceService } from '../posts-service.service';
import { Subscription, catchError } from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnDestroy {
  constructor(
    private http: HttpClient,
    private postsService: PostsServiceService,
  ) {}
  title!: string;
  body!: string;
  loading: boolean = false;
  savedTitle: boolean = false;
  subscirber!: Subscription;

  onSave() {
    const newPost = {
      title: this.title,
      body: this.body,
      userId: 1,
    };
    this.subscirber =this.postNewPost(newPost)
      .pipe(catchError(this.postsService.handleError))
      .subscribe((data) => {
        this.turnONSavedTitleForSecs();
        this.setInputsEmpty();
        this.loading = false;
      });
  }

  setInputsEmpty() {
    this.title = '';
    this.body = '';
  }

  turnONSavedTitleForSecs() {
    this.savedTitle = true;
    const myTimeoute = setTimeout(() => {
      this.savedTitle = false;
      clearTimeout(myTimeoute);
    }, 4000);
  }

  postNewPost(newPost: { title: string; body: string; userId: number }) {
    this.loading = true;
    const res = this.http.post(this.postsService.url, newPost);
    return res;
  }

  ngOnDestroy(): void {
    this.subscirber.unsubscribe()
  }
}
