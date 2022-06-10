import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {


  link: string = '../../../assets/420.jpeg'

  constructor() { }

  ngOnInit(): void {
  }

}
