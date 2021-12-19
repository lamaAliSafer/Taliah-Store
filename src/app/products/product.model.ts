
export class Product {
    public title:string;
    public symmery:string;
    public url:string;
    public priceprod:string;

    constructor(name:string , price:string, imagePath:string,priceprod:string ){
        this.title = name;
        this.symmery = price;
        this.url = imagePath;
        this.priceprod = priceprod;

    }
}