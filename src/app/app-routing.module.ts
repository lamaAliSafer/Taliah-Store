import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
// import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { AuthguardGuard } from "./authguard.guard";
import { HomeComponent } from "./home/home.component";
import { ProdDetailComponent } from "./products/products-details/prod-detail/prod-detail.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductItemComponent } from "./products/product-list/product-item/product-item.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductStartComponent } from "./products/product-start/product-start.component";
import { ProductsComponent } from "./products/products.component";
import { TaliahSignInComponent } from "./taliah-sign-in/taliah-sign-in.component";
import { SilkPlasterListComponent } from "./products/product-list/silk-plaster-list/silk-plaster-list.component";
// import { ProductsListTaliahComponent } from "./products/products-list-taliah/products-list-taliah.component";
import { SmartStoneListComponent } from "./products/product-list/smart-stone-list/smart-stone-list.component";
import { GypsumListComponent } from "./products/product-list/gypsum-list/gypsum-list.component";
import { AluminumListComponent } from "./products/product-list/aluminum-list/aluminum-list.component";
import { FoldingDoorsListComponent } from "./products/product-list/folding-doors-list/folding-doors-list.component";
import { FansListComponent } from "./products/product-list/fans-list/fans-list.component";
import { WoodenWallListComponent } from "./products/product-list/wooden-wall-list/wooden-wall-list.component";
import { WoodenFloorListComponent } from "./products/product-list/wooden-floor-list/wooden-floor-list.component";
import { SiliconeListComponent } from "./products/product-list/silicone-list/silicone-list.component";
import { CustomizedProductsComponent } from "./products/customized-products/customized-products.component";
import { FoldingCustomizedListComponent } from "./products/customized-products/folding-customized-list/folding-customized-list.component";
import { BlindCustomizedListComponent } from "./products/customized-products/blind-customized-list/blind-customized-list.component";
import { StairCustomizedListComponent } from "./products/customized-products/stair-customized-list/stair-customized-list.component";
import { PvcComponent } from "./products/products-list-taliah/pvc/pvc.component";
import { GysumComponent } from "./products/products-list-taliah/gysum/gysum.component";
import { WoodenFloorComponent } from "./products/products-list-taliah/wooden-floor/wooden-floor.component";
import { WoodenWallComponent } from "./products/products-list-taliah/wooden-wall/wooden-wall.component";
import { FansComponent } from "./products/products-list-taliah/fans/fans.component";
import { SiliconeComponent } from "./products/products-list-taliah/silicone/silicone.component";
import { InteriorExteriorPaintsComponent } from "./products/products-list-taliah/interior-exterior-paints/interior-exterior-paints.component";
import { CartComponent } from "./cart/cart.component";
import { PvcProductsComponent } from "./products/product-list/pvc-products/pvc-products.component";
 // { path: 'id' , component:ProductDetailComponent},
    // {path: 'products/product-list/product-item' , component: ProductItemComponent},
 // { path: ':id' , component:ProductsDetailComponent},
    // { path: 'products/:id' , component:ProductDetailComponent},
    //  {path: 'product-list/silk-plaster-list' , component: SilkPlasterListComponent},
    //  {path: 'product-list/silk-plaster/:id' , component: ProdDetailComponent},
  // {path: 'product-list/silk-plaster-list/:id' , component: SilkPlasterDetComponent},
        //  {path: 'product-list' , component: ProductListComponent},
    //  {path: 'products' , component: ProductsComponent , children:[
    //     {path: '' , component: ProductStartComponent},
    // ]},
    // {path: 'products/product-list' , component: ProductsComponent , children:[
    //     {path: 'silk-plaster-list' , component: SilkPlasterListComponent},
    //     {path: 'silk-plaster-list/:id' , component: SilkPlasterDetComponent},

    // ]},

const appRoutes: Routes =[
    {path:'', redirectTo:'/products', pathMatch:'full'},
     {path: 'home' , component: HomeComponent},
     {path: 'sign-up' , component: SignUpComponent},
     {path: 'taliah-sign-in' , component: TaliahSignInComponent},
     {path: 'cart' , component: CartComponent},
     {path: 'products' , component: ProductsComponent , children:[
        {path: '' , component: ProductStartComponent},
]},
    { path: 'product-list' , component: ProductListComponent},
    { path: 'customized-products' , component: CustomizedProductsComponent},
    { path: 'customized-products/folding-customized-list' , component: FoldingCustomizedListComponent},
    { path: 'customized-products/blind-customized-list' , component: BlindCustomizedListComponent},
    { path: 'customized-products/stair-customized-list' , component: StairCustomizedListComponent},


    { path: 'products-list-taliah/gysum' , component: GysumComponent},

    
    { path: 'products-list-taliah/pvc' , component: PvcComponent},
    { path: 'pvc/:id' , component: PvcComponent},

    { path: 'products-list-taliah/wooden-floor' , component: WoodenFloorComponent},
    { path: 'products-list-taliah/wooden-wall' , component: WoodenWallComponent},
    { path: 'products-list-taliah/fans' , component: FansComponent},
    { path: 'products-list-taliah/silicone' , component: SiliconeComponent},
    { path: 'products-list-taliah/interior-exterior-paints' , component: InteriorExteriorPaintsComponent},


     {path: 'product-list/:id' , component: ProdDetailComponent},

     {path: 'silk-plaster-list' , component: SilkPlasterListComponent},
     {path: 'silk-plaster-list/:id' , component: SilkPlasterListComponent},
     {path: 'smart-stone-list' , component: SmartStoneListComponent},
     {path: 'smart-stone-list/:id' , component: SmartStoneListComponent},
     {path: 'gypsum-list' , component: GypsumListComponent},
     {path: 'gypsum-list/:id' , component: GypsumListComponent},
     {path: 'aluminum-list' , component: AluminumListComponent},
     {path: 'aluminum-list/:id' , component: AluminumListComponent},
     {path: 'folding-doors-list' , component: FoldingDoorsListComponent},
     {path: 'folding-doors-list/:id' , component: FoldingDoorsListComponent},
     {path: 'fans-list' , component: FansListComponent},
     {path: 'fans-list/:id' , component: FansListComponent},

     {path: 'wooden-wall-list' , component: WoodenWallListComponent},
     {path: 'wooden-wall-list/:id' , component: WoodenWallListComponent},

     {path: 'wooden-floor-list' , component: WoodenFloorListComponent},
     {path: 'wooden-floor-list/:id' , component: WoodenFloorListComponent},

     {path: 'silicone-list' , component: SiliconeListComponent},
     {path: 'silicone-list/:id' , component: SiliconeListComponent},
     

    {path: 'products/:id' , component: ProductDetailComponent},
    { path: 'dashboard', component: ProductsComponent,canActivate: [AuthguardGuard] },
    
    {path: 'products-list-taliah/pvc' , component: PvcProductsComponent},
    {path: 'products-list-taliah/pvc/:id' , component: PvcProductsComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}