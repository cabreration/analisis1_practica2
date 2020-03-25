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
  let modPrice;
  let modName;
  let modIndex;


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
    modPrice = component['modPrice'];
    modName = component['modName'];
    productsquantity=component['products'].length;
    modIndex = component['modIndex'];
  });

  afterEach(() => {
    sessionStorage.removeItem('usuario');
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
        .toEqual(productsquantity-1 || 0);
  });

  it('product should not be repeated', () => {
    component.createProduct();
    expect(products.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })).toEqual(products);
  });

  it('when modifying a product price should be positive numeric', () => {
    expect(modPrice).toBeGreaterThanOrEqual(0);
  });

  it('when selecting a producto to modify it index should be between 0 and list length', () => {
    expect(modIndex).toBeGreaterThanOrEqual(0);
    expect(modIndex).toBeLessThanOrEqual(products.length);
  });

  it('when modifying a product price and name should not be empty', () => {
    expect(modPrice).not.toBe('');
    expect(modName).not.toBeNull('');
  });

  it('el usuario debe estar autenticado', () => {
    let credenciales = {
      user: 'ADMIN',
      password: '123'
    };

    sessionStorage.setItem('usuario', JSON.stringify(credenciales)); 
    expect(component.isLogged()).toBeTruthy();
  });

  it('la variable de sesion de debe eliminar al cerrar sesion', () => {
    let credenciales = {
      user: 'ADMIN',
      password: '123'
    };

    sessionStorage.setItem('usuario', JSON.stringify(credenciales)); 
    component.logout()
    expect(sessionStorage.getItem('usuario')).toEqual(null);
  });
});

