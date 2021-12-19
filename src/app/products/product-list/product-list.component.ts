import { ChangeDetectionStrategy, Component ,Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router , ParamMap  } from '@angular/router';
import { ProdlisService } from '../prodlis.service';
import { Product } from '../product.model';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { ProductsComponent } from '../products.component';
import { PvcService } from '../prod-list/pvc.service';
declare const $:any;
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // @Input() items = [];
  // @Input() index: number;
  // id: number;
  products: Product[];
  Silkproducts: Product[];
  Smartproducts: Product[];
  Gypsumproducts: Product[];
  Aluminumproducts: Product[];
  FoldingDoorproducts: Product[];
  Fansproducts: Product[];
  WoodenWallproducts: Product[];
  WoodenFloorproducts: Product[];
  Siliconeproducts: Product[];


  sub: any;
  item: Product;
  id: number;



  // item: Product[];
  // ngAfterViewInit(){
  //   $('#carouselExampleCaptions').carousel()
  // }
  // products: Product[];

  constructor(private pvcService: PvcService, private router: Router , private route: ActivatedRoute) { }


  homeSlider={item:1, dots:true};
  homeSlider2={item:1, dots:true};

  ngOnInit(): void {
    this.products=this.pvcService.getProducts();

    this.Silkproducts=this.pvcService.getSilkProducts();
    this.Smartproducts=this.pvcService.getSmartProducts();
    this.Gypsumproducts=this.pvcService.getGypsumProducts();
    this.Aluminumproducts=this.pvcService.getAlumProducts();
    this.FoldingDoorproducts=this.pvcService.getFoldingDoorProducts();
    this.Fansproducts=this.pvcService.getFansProducts();
    this.WoodenWallproducts=this.pvcService.getWoodenWallProducts();
    this.WoodenFloorproducts=this.pvcService.getWoodenFloorProducts();
    this.Siliconeproducts=this.pvcService.getSiliconeProducts();

  }
  // theFunction(id:number){
  //   this.router.navigate(['/product-detail',id])
  // }

  // onNewRecipe(){
  //   this.route.params
  //   .subscribe(
  //     (params: Params) => {
  //       this.id = +params['id'];
  //       this.item = this.prodlisService.getProduct(this.id);
  //     }
  //   );  }


}