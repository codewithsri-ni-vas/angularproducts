import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-product-b]',
  templateUrl: './product-b.component.html',
  styleUrls: ['./product-b.component.css']
})
export class ProductBComponent implements OnInit {
  title = 'Lenovo laptop';
  imageURL='https://m.media-amazon.com/images/I/71hhgeQCrOL._AC_SX679_.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
