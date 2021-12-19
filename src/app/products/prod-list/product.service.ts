import { Injectable } from '@angular/core';
import { Products } from '../products.model';

@Injectable({
  providedIn: 'root'
})
export class ProducttService {

  products: Products[] =[
    new Products(
      1,
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      100,
      1,
      ["/assets/images/pvc/WEB_3D/TAL100.jpg","/assets/images/pvc/WEB_3D/TAL100-1.jpg"],

    ),
    new Products(
      2,
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      150,
      1,
      ["/assets/images/pvc/WEB_3D/TAL101.jpg","/assets/images/pvc/WEB_3D/TAL101-1.jpg"],
    ),
    new Products(
      3,
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      160,
      1,
      ["/assets/images/pvc/WEB_3D/TAL102.jpg","/assets/images/pvc/WEB_3D/TAL102-1.jpg"],
    ),
    new Products(
      4,
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      160,
      1,
      ["/assets/images/pvc/WEB_3D/TAL102.jpg","/assets/images/pvc/WEB_3D/TAL102-1.jpg"],
    ),
  ];
  constructor() { }

  getProducts(){
    return this.products;
  }

  getProduct(id:number){
    return this.products.find(product=>
      product.id === id);

  }
}
