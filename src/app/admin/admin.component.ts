import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products = [ {photo: './assets/img1.jpg', name: 'batman'} ];
  imgSrc = null;

  nombre = '';
  precio = 0;

  constructor() { }

  ngOnInit() {
  }

}
