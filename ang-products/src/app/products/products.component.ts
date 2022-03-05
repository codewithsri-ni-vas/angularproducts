import { Component } from "@angular/core";

@Component({
selector:'app-products',
templateUrl:'./products.component.html',
styleUrls:['./products.component.css']

})
export class ProductsComponent{
    title='Product Details';
    availableProducts=false;
    dellProducts=false;

    ngOnInit(){
       this.checkAvailability();
}
    checkAvailability(){
        this.availableProducts=navigator.userAgent.indexOf("Chrome") !== -1;

    }
    showDellProducts(){
        this.dellProducts=true;
    }

}