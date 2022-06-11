import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private service: RestaurantService) {}

  ngOnInit(): void {
    this.service.getAllRestaurants().subscribe((responce) => {
      responce.forEach((el) => {
        const data: any = el.payload.doc.data();
        this.restaurants.push({
          id: parseInt(el.payload.doc.id),
          name: data.name,
          imgUrl: data.imgUrl,
          type: data.type,
        });
      });
    });
  }

  djole() {
    console.log(this.restaurants)
  }
}
