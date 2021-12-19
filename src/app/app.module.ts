import { CarouselModule } from 'ngx-bootstrap/carousel'; 
import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirebaseService } from './services/firebase.service';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
// import { HeaderImageComponent } from './header-image/header-image.component';
import { NgbdCarouselConfig } from './header-image/carousel-config';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { TaliahSignInComponent } from './taliah-sign-in/taliah-sign-in.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProdDetailComponent } from './products/products-details/prod-detail/prod-detail.component';
import { SilkPlasterListComponent } from './products/product-list/silk-plaster-list/silk-plaster-list.component';
import { SmartStoneListComponent } from './products/product-list/smart-stone-list/smart-stone-list.component';
import { GypsumListComponent } from './products/product-list/gypsum-list/gypsum-list.component';
import { AluminumListComponent } from './products/product-list/aluminum-list/aluminum-list.component';
import { FoldingDoorsListComponent } from './products/product-list/folding-doors-list/folding-doors-list.component';
import { FansListComponent } from './products/product-list/fans-list/fans-list.component';
import { WoodenWallListComponent } from './products/product-list/wooden-wall-list/wooden-wall-list.component';
import { WoodenFloorListComponent } from './products/product-list/wooden-floor-list/wooden-floor-list.component';
import { SiliconeListComponent } from './products/product-list/silicone-list/silicone-list.component';
import { CustomizedProductsComponent } from './products/customized-products/customized-products.component';
import { FoldingCustomizedListComponent } from './products/customized-products/folding-customized-list/folding-customized-list.component';
import { BlindCustomizedListComponent } from './products/customized-products/blind-customized-list/blind-customized-list.component';
import { StairCustomizedListComponent } from './products/customized-products/stair-customized-list/stair-customized-list.component';
import { PvcComponent } from './products/products-list-taliah/pvc/pvc.component';
import { GysumComponent } from './products/products-list-taliah/gysum/gysum.component';
import { WoodenFloorComponent } from './products/products-list-taliah/wooden-floor/wooden-floor.component';
import { WoodenWallComponent } from './products/products-list-taliah/wooden-wall/wooden-wall.component';
import { FansComponent } from './products/products-list-taliah/fans/fans.component';
import { SiliconeComponent } from './products/products-list-taliah/silicone/silicone.component';
import { InteriorExteriorPaintsComponent } from './products/products-list-taliah/interior-exterior-paints/interior-exterior-paints.component';
import { CartComponent } from './cart/cart.component';
import { PvcProductsComponent } from './products/product-list/pvc-products/pvc-products.component';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    // HeaderImageComponent,
    NgbdCarouselConfig,
    AuthComponent,
    TaliahSignInComponent,
    HomeUserComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductStartComponent,
    ProdDetailComponent,
    SilkPlasterListComponent,
    SmartStoneListComponent,
    GypsumListComponent,
    AluminumListComponent,
    FoldingDoorsListComponent,
    FansListComponent,
    WoodenWallListComponent,
    WoodenFloorListComponent,
    SiliconeListComponent,
    CustomizedProductsComponent,
    FoldingCustomizedListComponent,
    BlindCustomizedListComponent,
    StairCustomizedListComponent,
    PvcComponent,
    GysumComponent,
    WoodenFloorComponent,
    WoodenWallComponent,
    FansComponent,
    SiliconeComponent,
    InteriorExteriorPaintsComponent,
    CartComponent,
    PvcProductsComponent
    ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    OwlModule,
    AppRoutingModule,
    CarouselModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyCN59Kz7QKpjjL7dVszlRPpbvDKf6Zy870",
      authDomain: "taliah-app.firebaseapp.com",
      projectId: "taliah-app",
      storageBucket: "taliah-app.appspot.com",
      messagingSenderId: "1088027945957",
      appId: "1:1088027945957:web:278fa8c5dbd3c20f569d0c"
    })
    // CarouselModule.forRoot(),

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
