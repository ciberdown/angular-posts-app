import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserMainComponent } from '../components/user-main/user-main.component';
import { SelectedContactComponent } from '../components/contacts/selected-contact/selected-contact.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { EditContactComponent } from '../components/contacts/edit-contact/edit-contact.component';
import { AddContactComponent } from '../components/contacts/add-contact/add-contact.component';
import { PostsComponent } from '../components/posts/posts.component';
import { ShowSelectedPostComponent } from '../components/posts/show-selected-post/show-selected-post.component';
import { EditPostComponent } from '../components/posts/edit-post/edit-post.component';
import { AddPostComponent } from '../components/posts/add-post/add-post.component';
import { UsersComponent } from '../components/users/users.component';
import { AddUserComponent } from '../components/users/add-user/add-user.component';
import { ShowSelectedUserComponent } from '../components/users/show-selected-user/show-selected-user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserMainComponent,
    children: [
      {
        path: 'contacts',
        component: ContactsComponent,
        children: [
          { path: 'select/:id', component: SelectedContactComponent },
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
        path: 'posts',
        component: PostsComponent,
        children: [
          {
            path: 'select/:id',
            component: ShowSelectedPostComponent,
          },
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
      {
        path: 'signIn',
        component: SignInComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: 'add',
            component: AddUserComponent,
          },
          {
            path: 'selected/:id',
            component: ShowSelectedUserComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserModule {}
