import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';
import { Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {



  @Input() item!: MenuItem;

  quantity: number = 0


  constructor() { }

  ngOnInit(): void {
  }

  plus() {
    this.quantity++;
  }

  minus() {
    if (this.quantity <= 0) return
    this.quantity--;
  }

}
