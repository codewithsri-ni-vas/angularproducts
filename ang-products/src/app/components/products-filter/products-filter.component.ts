import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  isWindows=true;
  isMac=true;
  WindowsProducts = [
    {
      "id": 101,
      "name": "Acer laptop",
      "price": 300,
      "url": 'https://m.media-amazon.com/images/I/71233PTgAjL._AC_SX679_.jpg'
    },
    {
      "id": 102,
      "name": " Lenovo laptop",
      "price": 350,
      "url": 'https://m.media-amazon.com/images/I/71hhgeQCrOL._AC_SX679_.jpg'
    },
    {
      "id": 103,
      "name": "Dell laptop",
      "price": 400,
      "url": 'https://m.media-amazon.com/images/I/710QdRZmrhL._AC_SX679_.jpg'
    },
  ]
 MacProducts = [
    {
      "id": 201,
      "name": "Mac book air ",
      "price": 999,
      "url": 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418599_sd.jpg;maxHeight=640;maxWidth=550'
    },
    {
      "id": 202,
      "name": " Lenovo laptop",
      "price": 1999,
      "url": 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788574000'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  showWindowsOnly(){
    this.isMac=false;
  }
  showMacOnly(){
this.isWindows=false;
  }
  
}
