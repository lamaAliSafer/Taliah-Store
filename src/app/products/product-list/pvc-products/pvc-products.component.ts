import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Products } from '../../products.model';
import { ProducttService } from '../../prod-list/product.service';


@Component({
  selector: 'app-pvc-products',
  templateUrl: './pvc-products.component.html',
  styleUrls: ['./pvc-products.component.css']
})
export class PvcProductsComponent implements OnInit {

  product:Products;
  displayedImg = 0;
  constructor(private productService:ProducttService , private route: ActivatedRoute , private cartService:CartService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);
  }

  addToCart(product:Products){
    this.cartService.addItem(product);
  }

}
