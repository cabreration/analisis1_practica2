import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { 
  }

  setProducts(product) {
    localStorage.setItem('products', JSON.stringify(product));
  }

  getProducts() {
  	return JSON.parse(localStorage.getItem('products'));
  }

  isNotEmpty(){
    if(localStorage.getItem('products')!=undefined) return true;
    return false;
  }

  flush(){
    localStorage.setItem('products', JSON.stringify([]));
  }

}