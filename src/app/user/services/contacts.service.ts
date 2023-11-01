import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  activatedEditId: number | undefined;
  private contacts: People = [
    {
      name: 'Robert',
      age: 18,
      id: 1,
    },
    {
      name: 'Sam',
      age: 22,
      id: 1245,
    },
    {
      name: 'Jane',
      age: 35,
      id: 3452,
    },
  ];
  constructor() {}
  contactEditEmmiter: EventEmitter<Contact> = new EventEmitter<Contact>();
  ActiveIdEmmiter: EventEmitter<number> = new EventEmitter<number>();

  getContactById(id: number): Contact | undefined {
    let foundedContact: Contact | undefined;
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        foundedContact = this.contacts[i];
        break;
      }
    }
    return foundedContact;
  }

  getContacts() {
    return this.contacts;
  }
  addContact(contact: Contact): boolean {
    this.contacts.push(contact);
    return true;
  }
  removeContact(id: number): boolean {
    let removed: boolean = false;

    this.contacts = this.contacts.filter((contact) => {
      if (contact.id === id) {
        removed = true;
        return;
      } else {
        return contact;
      }
    });

    return removed;
  }

  editContact(id: number, options: EditOptions): boolean {
    const newContact: Contact = {
      id,
      name: options.newName,
      age: options.newAge,
      email: options.newEmail,
    };
    let edited: boolean = false;
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        this.contacts[i] = newContact;
        edited = true;
        break;
      }
    }
    this.contactEditEmmiter.emit(newContact);
    return edited;
  }
}

export type People = Contact[];

export interface Contact {
  id: number;
  name: string;
  age: number;
  email?: string;
}

interface EditOptions {
  newName: string;
  newAge: number;
  newEmail: string;
}
