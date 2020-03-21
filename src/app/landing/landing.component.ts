import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  products = [ {photo: './assets/img1.jpg', name: 'batman'} ];
  nombre = '';
  telefono = '';
  cantidad = 1;

  constructor(private productsservice:ProductsService) {
    if(this.productsservice.isNotEmpty()) this.products=this.productsservice.getProducts();
    else this.products=[];
  }

  ngOnInit() {
  }

}
