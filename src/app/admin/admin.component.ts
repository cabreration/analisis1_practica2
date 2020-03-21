import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products = [ {photo: './assets/img1.jpg', name: 'batman', price:10} ];
  imgSrc = null;

  name = '';
  price = 0;
  photo:any = '';

  constructor(private productsservice:ProductsService) {
    if(this.productsservice.isNotEmpty()) this.products=this.productsservice.getProducts();
    else this.products=[];
  }

  ngOnInit() {
  }

  createProduct(){
    this.products.push({photo:this.photo,name:this.name,price:this.price});
    this.productsservice.setProducts(this.products);
    this.name='';
    this.price=0;
    this.photo='';
  }

  deleteProduct(name){
    let i;
    this.products.find((value,index) =>{
      if(value.name==name) {
        i=index;
      }
    });
    this.products.splice(i,1);
    this.productsservice.setProducts(this.products);
  }

  productPhoto : File;
  imagePreview: string;
  onFileUpload(event){
    this.productPhoto = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.photo=reader.result;
    };
    reader.readAsDataURL(this.productPhoto);
  }

}
