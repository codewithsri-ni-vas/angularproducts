import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-product-c',
  templateUrl: './product-c.component.html',
  styleUrls: ['./product-c.component.css']
})
export class ProductCComponent implements OnInit {
  title = 'Dell laptop';
  imageURL='https://m.media-amazon.com/images/I/710QdRZmrhL._AC_SX679_.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
