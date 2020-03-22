import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { ProductsService } from '../services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LandingComponent } from '../landing/landing.component';
import { LoginComponent } from '../login/login.component';
import { CartProductsService } from '../services/cart-products.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let price:any;
  let products;
  let productsquantity;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
        LandingComponent,
        LoginComponent,
        AdminComponent ],
      imports:[BrowserModule,
        AppRoutingModule,
        FormsModule],
      providers: [ProductsService,CartProductsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    price = component['price'];
    products=component['products'];
    productsquantity=component['products'].length;
  });

  afterEach(() => {
    
  });

  it('price should be positive numeric', () => {
    expect(price).toBeGreaterThanOrEqual(0);
  });

  it('create product should increase products', () => {
    component.createProduct();
    expect(products.length)
        .toEqual(productsquantity+1);
  });

  it('delete product should decrease products', () => {
    component.deleteProduct('');
    expect(products.length)
        .toEqual(productsquantity-1);
  });

  it('product should not be repeated', () => {
    component.createProduct();
    expect(products.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })).toEqual(products);
  });
});

