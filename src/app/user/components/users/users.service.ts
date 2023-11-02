import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersSubject = new Subject<User[]>();
  selectedUserSubject = new Subject<number>();
  url: string = 'https://jsonplaceholder.typicode.com/users';

  
  constructor(private http: HttpClient) {
    this.http.get<User[]>(this.url).subscribe((users) => {
      this.usersSubject.next(users);
    });
  }
}
