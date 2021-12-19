import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PvcService } from '../../prod-list/pvc.service';
import { Product } from '../../product.model';
declare var increaseCount:any;
declare var decreaseCount:any;
@Component({
  selector: 'app-silicone-list',
  templateUrl: './silicone-list.component.html',
  styleUrls: ['./silicone-list.component.css']
})
export class SiliconeListComponent implements OnInit {
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
         this.item2 = this.pvcService.getSiliconeProduct(this.id);
       }
     );
  }

}