import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  Contact,
  ContactsService,
} from 'src/app/user/services/contacts.service';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss'],
})
export class SingleContactComponent implements OnInit, OnDestroy {
  @Input() contact: Contact | undefined;
  selectedId: number | undefined;
  subscriber!: Subscription;

  constructor(private contactsService: ContactsService) {}
  ngOnInit(): void {
    this.subscriber = this.contactsService.ActiveIdEmmiter.subscribe((id) => {
      if (id === this.contact?.id) console.log(this.contact);
      this.selectedId = id;
    });
  }

  getContact(id: number) {
    return this.contactsService.getContactById(id);
  }

  onRemove(event: MouseEvent) {
    this.contactsService.removeContact(<number>this.contact?.id);
    event.stopPropagation();
  }

  onEdit(event: MouseEvent) {
    event.stopPropagation();
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
