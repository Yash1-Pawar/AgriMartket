import { Component, OnInit } from '@angular/core';
import { MOCK_FARMER_CONTACT } from 'src/app/mockdata/farmersPortal/contact';
import { Expert } from 'src/app/model/Expert';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  listOfContacts:Expert[] = MOCK_FARMER_CONTACT;

  constructor() { }

  ngOnInit(): void {

  }

}
