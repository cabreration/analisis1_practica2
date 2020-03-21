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
  cartProducts = [ {photo: './assets/img1.jpg', name: 'batman' , precio: 23,} ];
  nombre = '';
  telefono = '';
  cantidad = 1;
  imgSrc = null;

  constructor(private productsservice:ProductsService , private cart:CartProductsService) {
    if(this.productsservice.isNotEmpty()) this.products=this.productsservice.getProducts();
    else this.products=[];
    if(this.cart.isNotEmpty()) this.cartProducts=this.cart.getCart();
    else this.cartProducts=[];
  }

  ngOnInit() {
  }

}
