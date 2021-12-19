import {Component ,Input,OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/api.service';
import {PvcService } from '../prod-list/pvc.service';
import { Product } from '../product.model';
declare const $:any;
declare var runSlider:any;

@Component({
  selector: 'app-customized-products',
  templateUrl: './customized-products.component.html',
  styleUrls: ['./customized-products.component.css']
})
export class CustomizedProductsComponent{
  // FoldingDoorproducts: Product[];
  textDir: string = 'ltr';


  constructor(public translateService: TranslateService) {
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
}

  // homeSlider={item:1, dots:true};
  
  // ngOnInit(): void {
  //   this.FoldingDoorproducts=this.pvcService.getFoldingDoorProducts();
  // }

}
