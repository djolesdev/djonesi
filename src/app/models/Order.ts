import { CartItem } from "./CartItem";

export class Order {
  user: string;
  items: CartItem[];
  totalPrice: number;

  constructor(user: string, items: CartItem[], totalPrice: number) {
    this.user = user;
    this.items = items;
    this.totalPrice = totalPrice;
  }
}
