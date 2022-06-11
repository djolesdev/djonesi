import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private firestore: AngularFirestore) { }

  getAllRestaurants() {
    return this.firestore.collection('/restaurants').snapshotChanges()
  }

  getRestaurantMenu(id: string) {
    return this.firestore.collection('/menus').doc(`${id}`).snapshotChanges()
  }

}
