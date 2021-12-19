import {Component ,Input,OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import { PvcService } from '../../prod-list/pvc.service';
import { Product } from '../../product.model';

declare const $:any;
declare var runSlider:any;
@Component({
  selector: 'app-blind-customized-list',
  templateUrl: './blind-customized-list.component.html',
  styleUrls: ['./blind-customized-list.component.css']
})
export class BlindCustomizedListComponent implements OnInit {
  Siliconeproducts: Product[];

  constructor(private pvcService: PvcService, private router: Router , private route: ActivatedRoute) { 
    // runSlider();
  }


  homeSlider={item:1, dots:true};
  
  ngOnInit(): void {
    this.Siliconeproducts=this.pvcService.getBlindsProducts();
  }

}
