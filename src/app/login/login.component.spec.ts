import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent } from '../app.component';
import { LandingComponent } from '../landing/landing.component';
import { AdminComponent } from '../admin/admin.component';
import { SalesCartComponent } from '../sales-cart/sales-cart.component';
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
        AdminComponent,
      SalesCartComponent ],imports:[BrowserModule,
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
