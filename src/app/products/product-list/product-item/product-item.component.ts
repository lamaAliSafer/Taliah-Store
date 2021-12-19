import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() index: number;
  @Input() items = [];
  constructor() { }
  homeSlider={item:1, dots:true};

  ngOnInit(): void {

  }

}
