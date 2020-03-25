import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { CartProductsService } from '../services/cart-products.service';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let cartProducts;
  let priceUnit;
  let price:any;
  let total;
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
        LandingComponent,
        LoginComponent,
        AdminComponent
      ],imports:[BrowserModule,
        AppRoutingModule,
        FormsModule],
      providers: [ProductsService,CartProductsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cartProducts=component['cartProducts'];
    price = component['precioUnitaro'];
    total= component['total'];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('order should not be repeated', () => {
    component.receiveOrder();
    expect(cartProducts.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })).toEqual(cartProducts);
  });

  it('productos no deben de estar repetidos', () => {
    expect((new Set(component.products)).size !== component.products.length).toBe(false);
  });

});
