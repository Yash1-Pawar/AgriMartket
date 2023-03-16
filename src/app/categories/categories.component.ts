import { Component, OnInit } from '@angular/core';
import { MOCK_RELEASES } from '../mockdata/newReleases';
import { Releases } from '../model/Releases';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  cartItems:Releases[] = [];
  newReleases:Releases[] = MOCK_RELEASES;
  totalPrice:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item:Releases) {
    this.cartItems.push(item);
    this.totalPrice += Number.parseInt(item.price);
  }

  removeFromCart(item:Releases) {
    this.cartItems = this.cartItems.filter(ele=> ele != item);
    this.totalPrice -= Number.parseInt(item.price);
  }


}
