import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { ProductsComponent } from "./products.component";

@Injectable()
export class ProductService{
    item:Product[];
        // private  item:Product[] = [
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

      constructor(private productsComponent:ProductsComponent ){}

      getProducts(){
          return this.item.slice();
      }

      getProduct(index:number){
          return this.productsComponent[index];
        //   console.log(this.item[index]);
          
      }
      
    //   addIngredientsToShoppingList(ingredients:Ingredient[]){
    //       this.slService.addIngredients(ingredients);
    //   }

}