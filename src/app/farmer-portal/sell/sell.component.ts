import { Component, OnInit } from '@angular/core';
import { MOCK_RELEASES } from 'src/app/mockdata/newReleases';
import { Releases } from 'src/app/model/Releases';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

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
