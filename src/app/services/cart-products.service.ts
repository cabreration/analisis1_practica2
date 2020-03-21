import { Injectable } from '@angular/core';

@Injectable()
export class CartProductsService {

  constructor() { }

  setCart(cartProduct){
    localStorage.setItem('itemsInCart',JSON.stringify(cartProduct));
  }
  getCart(){
    return JSON.parse(localStorage.getItem('itemsInCart'));
  }
  isNotEmpty(){
    if(localStorage.getItem('itemsInCart')!=undefined) return true;
    return false;
  }


  flush(){
    localStorage.setItem('itemsInCart', JSON.stringify([]));
  }
}
