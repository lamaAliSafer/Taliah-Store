import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/product.model';
import { Products } from '../products/products.model';

let itemsInCart = [];

@Injectable({
  providedIn: 'root'
})
export class CartService {
  placeholder = [];
  cartItems = new BehaviorSubject([]);
  public carItemList : any =[];
  public productList = new BehaviorSubject<any>([]); 
  constructor() {
    // JSON.parse(localStorage.getItem('cart'));
    const ls = this.getCartData();
    if(ls) this.cartItems.next(ls);

   }

  getProducts(){
    return this.productList.asObservable();

  }

  setProducts(product: any){
  this.carItemList.push(...product);
  this.productList.next(product);

JSON.parse(localStorage.getItem('cart'));
  // let exist:Product;
  // if(ls)
  // exist = ls.find(item)=>{

  // }

  }

  addtoCart(product: any){
    this.carItemList.push(product);
    this.productList.next(this.carItemList);
    this.getTotalPrice();
    console.log(this.carItemList);
  } 

  addItem(product: Products){
    const ls = this.getCartData();

    let exist:Products;
    if(ls)
    exist = ls.find((item)=>{
      return item.id === product.id;
    });
  
    if(exist){
      exist.qty++;
      this.setCartData(ls);

    }else{
      if(ls){
        const newData = [...ls,product];
        this.setCartData(newData);
      }
      this.placeholder.push(product);
      this.setCartData(this.placeholder);
    }

  }

  setCartData(data:any){
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartItems.next(this.getCartData());
    

  }
  getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.carItemList.map((a:any)=>{
      grandTotal += a.total;

    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.carItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.carItemList.splice(index,1); 
      }
    })
    this.productList.next(this.carItemList);
     

  }
  removeAllCart(){
    this.carItemList = []
    this.productList.next(this.carItemList);
  }
}
