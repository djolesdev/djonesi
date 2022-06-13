import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { selectCart } from 'src/app/state/cart/cart.selectors';
import { CartItem } from 'src/app/models/CartItem';
import { OrderService } from 'src/app/services/order/order.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private service: OrderService, state: Store<AppState>) {
    state.select(selectCart).subscribe((cart) => {
      this.totalPrice = cart.totalPrice;
      this.cart = cart.items;
    });
  }

  ngOnInit(): void {
    console.log(this.cart);
  }

  createOrder() {
    const email = localStorage.getItem('user') + '';

    const arr = this.cart.map(item => {
      return {
        name: item.name,
        price: item.price,
        quantity: item.quantity
      }
    })

    this.service.createOrder({
      email: email,
      cart: arr,
      price: this.totalPrice,
    });

    alert("Order created successfully")
  }
}
