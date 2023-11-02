import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './user/components/home/home.component';
import { PostsComponent } from './user/components/posts/posts.component';
import { ContactsComponent } from './user/components/contacts/contacts.component';
import { SignInComponent } from './user/components/sign-in/sign-in.component';
import { SelectedContactComponent } from './user/components/contacts/selected-contact/selected-contact.component';
import { EditContactComponent } from './user/components/contacts/edit-contact/edit-contact.component';
import { AddContactComponent } from './user/components/contacts/add-contact/add-contact.component';
import { SingleContactComponent } from './user/components/contacts/single-contact/single-contact.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './user/components/posts/single-post/single-post.component';
import { EditPostComponent } from './user/components/posts/edit-post/edit-post.component';
import { AddPostComponent } from './user/components/posts/add-post/add-post.component';
import { ShowSelectedPostComponent } from './user/components/posts/show-selected-post/show-selected-post.component';
import { NavigationbarComponent } from './user/components/navigationbar/navigationbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexboxComponent } from './user/customComponents/flexbox/flexbox.component';
import { GridComponent } from './user/customComponents/grid/grid.component';
import { AdminMainComponent } from './admin/components/admin-main/admin-main.component';
import { UserMainComponent } from './user/components/user-main/user-main.component';
import { TemplateDrivenFormComponent } from './admin/components/template-driven-form/template-driven-form.component';
import { DirectiveFormsComponent } from './admin/components/directive-forms/directive-forms.component';
import { CommentsComponent } from './user/components/posts/comments/comments.component';
import { SignleCommentComponent } from './user/components/posts/comments/signle-comment/signle-comment.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./admin/core/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./user/core/user.module').then((m) => m.UserModule),
  },
  // Other top-level routes
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
    AdminMainComponent,
    UserMainComponent,
    TemplateDrivenFormComponent,
    DirectiveFormsComponent,
    CommentsComponent,
    SignleCommentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
