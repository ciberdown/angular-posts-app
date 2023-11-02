import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../users.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-selected-user',
  templateUrl: './show-selected-user.component.html',
  styleUrls: ['./show-selected-user.component.scss'],
})
export class ShowSelectedUserComponent implements OnInit {
  selectedUser: User | undefined;
  fetchingData: boolean = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private usersService: UsersService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.usersService.selectedUserSubject.next(id);
        this.fetchingData = true;
        this.http
          .get<User>(this.usersService.url + '/' + id)
          .subscribe((user) => {
            this.selectedUser = user;
            this.fetchingData = false;
          });
      }
    });
  }
}
