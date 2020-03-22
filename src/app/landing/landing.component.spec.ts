import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';
import { SalesCartComponent } from '../sales-cart/sales-cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { CartProductsService } from '../services/cart-products.service';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

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
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
