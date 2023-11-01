import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature1/components/home/home.component';
import { PostsComponent } from './feature1/components/posts/posts.component';
import { ContactsComponent } from './feature1/components/contacts/contacts.component';
import { SignInComponent } from './feature1/components/sign-in/sign-in.component';
import { SelectedContactComponent } from './feature1/components/contacts/selected-contact/selected-contact.component';
import { EditContactComponent } from './feature1/components/contacts/edit-contact/edit-contact.component';
import { AddContactComponent } from './feature1/components/contacts/add-contact/add-contact.component';
import { SingleContactComponent } from './feature1/components/contacts/single-contact/single-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './feature1/components/posts/single-post/single-post.component';
import { EditPostComponent } from './feature1/components/posts/edit-post/edit-post.component';
import { AddPostComponent } from './feature1/components/posts/add-post/add-post.component';
import { ShowSelectedPostComponent } from './feature1/components/posts/show-selected-post/show-selected-post.component';
import { NavigationbarComponent } from './feature1/components/navigationbar/navigationbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexboxComponent } from './feature1/customComponents/flexbox/flexbox.component';
import { GridComponent } from './feature1/customComponents/grid/grid.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      {
        path: 'selected/:id',
        component: SelectedContactComponent,
      },
      {
        path: 'edit/:id',
        component: EditContactComponent,
      },
      {
        path: 'add',
        component: AddContactComponent,
      },
    ],
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      { path: 'selected/:id', component: ShowSelectedPostComponent },
      {
        path: 'edit/:id',
        component: EditPostComponent,
      },
      {
        path: 'add',
        component: AddPostComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    ContactsComponent,
    SignInComponent,
    SelectedContactComponent,
    EditContactComponent,
    AddContactComponent,
    SingleContactComponent,
    SinglePostComponent,
    EditPostComponent,
    AddPostComponent,
    ShowSelectedPostComponent,
    NavigationbarComponent,
    FlexboxComponent,
    GridComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
