import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemInCart:number;
  // loginbtn:boolean;
  // logoutbtn:boolean;
  textDir: string = 'ltr';

  constructor(public translateService: TranslateService , private cartService:CartService) {
    this.translateService.instant('Yes');
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
  // dataService.getLoggedInName.subscribe(name => this.changeName(name));
  // if(this.dataService.isLoggedIn())
  // {
  // console.log("loggedin");
  // this.loginbtn=false;
  // this.logoutbtn=true
  // }
  // else{
  // this.loginbtn=true;
  // this.logoutbtn=false
  // }
  
  }

  ngOnInit(){
    this.cartService.cartItems.subscribe(d=>{
      this.itemInCart = d.length;
    });
  }
  
  // private changeName(name: boolean): void {
  // this.logoutbtn = name;
  // this.loginbtn = !name;
  // }
  // logout()
  // {
  // this.dataService.deleteToken();
  // window.location.href = window.location.href;
  // }
  }