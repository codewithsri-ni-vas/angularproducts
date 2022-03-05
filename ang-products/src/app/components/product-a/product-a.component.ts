import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-a',
  templateUrl: './product-a.component.html',

  styleUrls: ['./product-a.component.css']

})
export class ProductAComponent implements OnInit {

  title = 'Acer laptop';
  imageURL='https://m.media-amazon.com/images/I/71233PTgAjL._AC_SX679_.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
