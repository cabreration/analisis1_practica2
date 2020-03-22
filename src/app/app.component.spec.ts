import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SalesCartComponent } from './sales-cart/sales-cart.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { CartProductsService } from './services/cart-products.service';
import { ProductsService } from './services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,BrowserModule,
        AppRoutingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        LandingComponent,
        LoginComponent,
        AdminComponent,
        SalesCartComponent
      ],
      providers:[CartProductsService,ProductsService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
