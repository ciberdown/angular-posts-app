import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import {
  Contact,
  ContactsService,
} from 'src/app/user/services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  selectedContact: Contact | undefined;
  name!: string | undefined;
  age!: number | undefined;
  email: string = '';
  saved: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contacsService: ContactsService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: number = +params['id'];
      if (id) {
        this.setActiveId(id);
      }
    });
    this.contacsService.contactEditEmmiter.subscribe((contact) => {
      this.selectedContact = contact;
    });
  }

  setActiveId(id: number) {
    this.contacsService.activatedEditId = id;
    this.contacsService.ActiveIdEmmiter.emit(id);
    this.selectedContact = this.contacsService.getContactById(id);
  }

  makeInputsEmpty() {
    this.name = undefined;
    this.age = undefined;
    this.email = '';
  }

  onSave() {
    if (this.selectedContact?.id) {
      this.saved = this.contacsService.editContact(this.selectedContact.id, {
        newName: <string>this.name,
        newAge: <number>this.age,
        newEmail: this.email,
      });
    }
    this.makeInputsEmpty();
    this.selectedContact?.id && this.setActiveId(this.selectedContact?.id);
  }
}
