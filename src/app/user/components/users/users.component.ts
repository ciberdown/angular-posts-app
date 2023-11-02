import { Component, OnInit } from '@angular/core';
import { User } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: User[];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.usersSubject.subscribe((users) => {
      this.users = users;
    });
  }
}
