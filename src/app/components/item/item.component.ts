import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';
import { Input } from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/state/cart/cart.actions';
import { CartItem } from 'src/app/models/CartItem';
import { selectCart } from 'src/app/state/cart/cart.selectors';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item!: MenuItem;

  quantity: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  plus() { this.quantity++ }

  minus() {
    if (this.quantity <= 0) return;
    this.quantity--;
  }

  submitHandler() {
    const newItem = new CartItem(
      this.item.id,
      this.item.name,
      this.item.price,
      this.quantity
    );

    this.store.dispatch(
      addToCart({
        newItem: newItem,
      })
    );
  }
}
