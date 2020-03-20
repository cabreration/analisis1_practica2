import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
