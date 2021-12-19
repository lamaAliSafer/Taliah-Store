import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PvcService } from '../../prod-list/pvc.service';
import { Product } from '../../product.model';
declare var increaseCount:any;
declare var decreaseCount:any;
@Component({
  selector: 'app-wooden-wall-list',
  templateUrl: './wooden-wall-list.component.html',
  styleUrls: ['./wooden-wall-list.component.css']
})
export class WoodenWallListComponent implements OnInit {

  item2: Product;
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
         this.item2 = this.pvcService.getWoodenWallProduct(this.id);
       }
     );
  }

}
