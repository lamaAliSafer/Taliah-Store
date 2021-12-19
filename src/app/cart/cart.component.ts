import { Component, OnInit } from '@angular/core';
import { Products } from '../products/products.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number; 

  items:Products[]=[];
  total:number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

    this.cartService.cartItems.subscribe(data=>{
      this.items = data;
      if(this.items) this.getTotal(this.items);
    });

  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

  onDelete(i:number){
    this.items.splice(i, 1);
    this.cartService.setCartData(this.items);
    this.getTotal(this.items);
  }

  validateInput(event:any, i:number){
    const qty = +event.target.value;
    if(qty < 1){
      event.target.value = this.items[i].qty;
      return;
    }
    this.QtyUpdated(qty, i)
  }

 private QtyUpdated(qty:number, i:number){
   this.items[i].qty = qty;
   this.cartService.setCartData(this.items);
   this.getTotal(this.items);
  }
  getTotal(data:any){
    let subs = 0;
    for(const item of data)
    subs +=  item.price * item.qty;
    this.total = subs;

  }
}
