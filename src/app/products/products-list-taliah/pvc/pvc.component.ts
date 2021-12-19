import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../.././product.service';
import { ProducttService } from '../../prod-list/product.service';
import { Products } from '../../products.model';
declare var filtter:any;

@Component({
  selector: 'app-pvc',
  templateUrl: './pvc.component.html',
  styleUrls: ['./pvc.component.css']
})
export class PvcComponent implements OnInit {
  products:Products[]=[];
  constructor(private productService:ProducttService) {  filtter(); }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
