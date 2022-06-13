import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Order } from 'src/app/models/Order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private firestore: AngularFirestore) { }

  createOrder(order: any) {
    return this.firestore.collection('orders').add(order)
  }
}
