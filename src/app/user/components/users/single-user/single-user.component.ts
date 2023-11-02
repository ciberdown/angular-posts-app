import { Component, Input, OnInit } from '@angular/core';
import { User } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss'],
})
export class SingleUserComponent implements OnInit {
  selectedId!: number;
  @Input() user!: User;

  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.selectedUserSubject.subscribe((id) => {
      this.selectedId = id;
    });
  }

  onSelect() {
    this.usersService.selectedUserSubject.next(this.user.id);
  }

  onRemove(event: MouseEvent) {
    event.stopPropagation();
  }
}
