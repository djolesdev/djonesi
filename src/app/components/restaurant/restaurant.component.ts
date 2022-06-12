import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/models/MenuItem';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { AppState } from 'src/app/state/app.state';
import { selectCart } from 'src/app/state/cart/cart.selectors';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  id: string = ''

  menu: MenuItem[] = []


  constructor(private service: RestaurantService, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {


    this.route.params.subscribe(paramId => this.id = paramId.id)
    this.service.getRestaurantMenu(this.id).subscribe((responce) => {
      const data: any = responce.payload.data()

      for (const el in data) {
        this.menu.push(data[el])
      }
      
    })
    
  }

}
