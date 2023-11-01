import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Contact,
  ContactsService,
} from 'src/app/user/services/contacts.service';

@Component({
  selector: 'app-selected-contact',
  templateUrl: './selected-contact.component.html',
  styleUrls: ['./selected-contact.component.scss'],
})
export class SelectedContactComponent implements OnInit {
  activeContact: Contact | undefined;
  constructor(
    public activeRoute: ActivatedRoute,
    private contactsService: ContactsService,
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.activeContact = this.contactsService.getContactById(id);
      }
    });
  }
}
