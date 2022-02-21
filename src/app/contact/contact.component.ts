import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    contact: Contact = new Contact();
    contacts: Array<any> = new Array();

    constructor(private contactService: ContactService) {}

    ngOnInit(): void {
        this.listContacts();
    }
    listContacts() {
        this.contactService.list().subscribe(
            (contacts) => {
                this.contacts = contacts['results'];
            },
            (err) => {
                console.log(err);
            }
        );
    }

    createContact() {
        this.contactService.create(this.contact).subscribe(
            (contacts) => {
                this.contact = new Contact();
                this.listContacts();
            },
            (err) => {
                console.log(err);
            }
        );
    }

    editContact(id: any) {
        this.contactService.edit(id, this.contact).subscribe(
            (contacts) => {
                this.contact = new Contact();
                this.listContacts();
            },
            (err) => {
                console.log(err);
            }
        );
    }

    deleteContact(id: any) {
        this.contactService.delete(id).subscribe(
            (contacts) => {
                this.contact = new Contact();
                this.listContacts();
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
