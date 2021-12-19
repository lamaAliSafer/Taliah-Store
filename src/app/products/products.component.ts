import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdlisService } from './prodlis.service';
import { Product } from './product.model';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProdlisService]

})
export class ProductsComponent implements OnInit {

  textDir: string = 'ltr';

  homeSlider={item:1, dots:true};
  products: Product[];
  sub: any;
  item: Product;
  id: number;

  constructor(public translateService: TranslateService,private prodlisService: ProdlisService, private router: Router , private route: ActivatedRoute) {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) =>
    {
      if(event.lang == 'en')
      {
        this.textDir = 'ltr';
      } 
      if(event.lang == 'ar')
      {
        this.textDir = 'rtl';

      }
    });
  }


  ngOnInit(): void {
    this.products=this.prodlisService.getProducts();

  }
  // items:Product[];

//    items:Product[] = [
//     new Product(
//       "1 slide label",
//       "1 slide label summery",
//       "/assets/TAL001 .jpg"
//     ),
//     new Product(
//       "1 slide label",
//       "1 slide label summery",
//       "/assets/TAL007 copy.jpg"
//     ),
//     new Product(
//       "1 slide label",
//       "1 slide label summery",
//       "/assets/TAL010.jpg"
//     ),
//     new Product(
//       "1 slide label",
//       "1 slide label summery",
//       "/assets/TAL001 .jpg"
//     ),
//     new Product(
//       "1 slide label",
//       "1 slide label summery",
//       "/assets/TAL001 .jpg"
//     ),

//   ];


// getProduct(index:number){
//     return this.items[index];
    
// }
}
