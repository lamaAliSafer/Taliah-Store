import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ApiService } from '../api.service';
import { CartService } from '../services/cart.service';

declare var name: any;
declare var langugetrans: any;
// declare var lang: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  itemInCart:number;

  textDir: string = 'ltr';
  textLan: string;
  isSignedIn =  false
  @Output() isLogout = new EventEmitter<void>()
  loginbtn:boolean;
  logoutbtn:boolean;
  currentLanguage: string;
  currentPage: string;
  
  public totalItem : number = 0;
  constructor(private dataService: ApiService , public translateService: TranslateService , private cartService: CartService) {

    
    
    this.translateService.addLangs(['en','ar']);
    if (localStorage.getItem('locale')) {
      const browserLang = localStorage.getItem('locale');
      translateService.use(browserLang.match(/en|ar/) ? browserLang : 'en');
   } else {
      localStorage.setItem('locale', 'en');
      translateService.setDefaultLang('en');
   }
    // this.translateService.setDefaultLang('en');
    // this.changeLanguage('en');
    // this.currentLanguage = localStorage.getItem(this.currentLanguage);

    // this.translateService.use('en');
    new name();
    new langugetrans();
    // new lang();
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
      console.log("loggedin"); 
      this.loginbtn=false;
      this.logoutbtn=true
    }
    else{
     this.loginbtn=true;
     this.logoutbtn=false
    }
 
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) =>
    {
      if(event.lang == 'en')
      {
        this.textDir = 'ltr';
        this.textLan = 'English';
      } 
      if(event.lang == 'ar')
      {
        this.textDir = 'rtl';
        this.textLan = 'العربية';

      }
    });
}
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    });
    this.cartService.cartItems.subscribe(d=>{
      this.itemInCart = d.length;
    });
  }
changeLang(language: string) {
  localStorage.setItem('locale', language);
  this.translateService.use(language);
}
// changeLanguage(language: string) {
//   this.translateService.use(language);
//   this.currentLanguage = language;
//   localStorage.setItem('currentLanguage', JSON.stringify(language))
//   localStorage.getItem('currentLanguage');



// } 
// useLanguage(language: string) {
//   this.translateService.use(language);
// }
private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
}
logout()
{
  this.dataService.deleteToken();
  window.location.href = window.location.href;
}
}
 