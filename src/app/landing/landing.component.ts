import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartProductsService } from '../services/cart-products.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  products = [ {photo: './assets/img1.jpg', name: 'batman'} ];
  cartProducts = [ {photo: './assets/img1.jpg',  name: 'batman',telefono:"0000",quantity:1 , precio: 23,} ];
  nombre = '';
  telefono = '';
  cantidad = 1;
  precioUnitaro = 0;
  imgSrc = null;
  total = 0;

  constructor(private productsservice:ProductsService , private cart:CartProductsService ) {
    if(this.productsservice.isNotEmpty()) this.products=this.productsservice.getProducts();
    else this.products=[];
    if(this.cart.isNotEmpty()) this.cartProducts=this.cart.getCart();
    else this.cartProducts=[];
  }

  receiveOrder(){
    var jsonOrder = JSON.stringify({photo: this.imgSrc , name: this.nombre , telefono: this.telefono , quantity:this.cantidad , precio:this.precioUnitaro });
    console.log('imprimiendo objeto json '+ jsonOrder );
   this.cartProducts.push({photo: this.imgSrc , name: this.nombre , telefono: this.telefono , quantity:this.cantidad , precio:this.precioUnitaro });
   this.cart.setCart(this.cartProducts);
    this.total += this.precioUnitaro
  }
  ngOnInit() {
  }

}
