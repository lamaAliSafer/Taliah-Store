import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { PvcService } from '../../prod-list/pvc.service';
import { Product } from '../../product.model';

declare var filtter:any;

@Component({
  selector: 'app-gysum',
  templateUrl: './gysum.component.html',
  styleUrls: ['./gysum.component.css']
})
export class GysumComponent implements OnInit {
  // products: Product[];
  // item: Product;
  // id: number;
  // constructor(private pvcService: PvcService, private router: Router , private route: ActivatedRoute, private cartService: CartService) {  filtter(); }

  ngOnInit(): void {
    // this.products=this.pvcService.getGypsumProducts();
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //     this.item = this.pvcService.getGypsumProduct(this.id);

    //     this.products.forEach((a:any) => {
    //       Object.assign(a,{quantity:1,total:a.price});
    //     })
    //   }
    // );
  }

  // addToCart(item: any){
  //   this.cartService.addtoCart(item);
  // }
}
