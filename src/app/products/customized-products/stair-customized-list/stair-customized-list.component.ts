import {Component ,Input,OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import { PvcService } from '../../prod-list/pvc.service';
import { Product } from '../../product.model';

declare const $:any;
declare var runSlider:any;
@Component({
  selector: 'app-stair-customized-list',
  templateUrl: './stair-customized-list.component.html',
  styleUrls: ['./stair-customized-list.component.css']
})
export class StairCustomizedListComponent implements OnInit {
  StairCaseproducts: Product[];

  constructor(private pvcService: PvcService, private router: Router , private route: ActivatedRoute) { 
    // runSlider();
  }


  homeSlider={item:1, dots:true};
  
  ngOnInit(): void {
    this.StairCaseproducts=this.pvcService.getStairProducts();
  }

}
