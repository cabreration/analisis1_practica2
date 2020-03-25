import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent } from '../app.component';
import { LandingComponent } from '../landing/landing.component';
import { AdminComponent } from '../admin/admin.component';
<<<<<<< HEAD
=======
//import { SalesCartComponent } from '../sales-cart/sales-cart.component';
>>>>>>> b78b78eff27c69fca3df9f1b5c7810d4ef5d0014
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { CartProductsService } from '../services/cart-products.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
        LandingComponent,
        LoginComponent,
<<<<<<< HEAD
        AdminComponent],imports:[BrowserModule,
=======
        AdminComponent/*,
      SalesCartComponent*/ ],imports:[BrowserModule,
>>>>>>> b78b78eff27c69fca3df9f1b5c7810d4ef5d0014
        AppRoutingModule,
        FormsModule],
      providers: [ProductsService,CartProductsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('la variable de sesion debe estar vacia antes de hacer login', () => {
    expect(sessionStorage.getItem(component.user)).toEqual(null);
  });

  it('la variable de sesion es almacenada luego de hacer login', () => {
    expect(sessionStorage.getItem(component.user)).toBeDefined();
  }); 

});
