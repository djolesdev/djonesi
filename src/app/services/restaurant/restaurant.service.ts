import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private firestore: AngularFirestore) { }

  getAllRestaurants() {
    return this.firestore.collection('/restaurants').snapshotChanges()
  }
}
