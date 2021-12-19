import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PvcService } from '../prod-list/pvc.service';
import { ProdlisService } from '../prodlis.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductsComponent } from '../products.component';
declare var increaseCount:any;
declare var decreaseCount:any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  item: Product;
  item2: Product;
  id: number;
  constructor(private prodlisService: ProdlisService,private pvcService: PvcService, private route:ActivatedRoute , private router: Router) { 

  }

  f(){
    increaseCount();
    decreaseCount();
  }
  ngOnInit(): void {
    
    this.route.params
     .subscribe(
       (params: Params) => {
         this.id = +params['id'];
         this.item = this.prodlisService.getProduct(this.id);
         this.item2 = this.pvcService.getProduct(this.id);
       }
     );
  }

}
