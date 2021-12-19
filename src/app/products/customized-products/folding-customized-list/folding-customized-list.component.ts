import {Component ,Input,OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import { PvcService } from '../../prod-list/pvc.service';
import { Product } from '../../product.model';

declare const $:any;
declare var runSlider:any;
@Component({
  selector: 'app-folding-customized-list',
  templateUrl: './folding-customized-list.component.html',
  styleUrls: ['./folding-customized-list.component.css']
})
export class FoldingCustomizedListComponent implements OnInit {
  FoldingDoorproducts: Product[];

  constructor(private pvcService: PvcService, private router: Router , private route: ActivatedRoute) { 
    // runSlider();
  }


  homeSlider={item:1, dots:true};
  
  ngOnInit(): void {
    this.FoldingDoorproducts=this.pvcService.getFoldingDoorProducts();
  }

}
