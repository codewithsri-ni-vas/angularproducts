import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-a',
  // templateUrl: './product-a.component.html',
  template:`
  <p>New Product A !</p>
  `,
  // styleUrls: ['./product-a.component.css']
  styles:[`
  p{
    color:orange;
  }
  `]
})
export class ProductAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
