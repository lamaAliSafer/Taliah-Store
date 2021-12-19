import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PvcService } from '../../prod-list/pvc.service';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';
import { ProductsComponent } from '../../products.component';
declare var increaseCount:any;
declare var decreaseCount:any;
@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent implements OnInit {
  item: Product;
  id: number;
  constructor(private pvcService: PvcService, private route:ActivatedRoute , private router: Router) { 

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
         this.item = this.pvcService.getProduct(this.id);
        //  this.item2 = this.pvcService.getSilkProduct(this.id);

       }
     );
  }
  // ngOnInit(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   const id2 = Number(this.route.snapshot.paramMap.get('id2'));
  //   if (id) {
  //     this.item =  this.pvcService.getProduct(id);
  //   }
  //   if (id2) {
  //     this.item2 =  this.pvcService.getSilkProduct(id2);

  //   }
  // }
}
