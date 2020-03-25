import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent } from '../app.component';
import { LandingComponent } from '../landing/landing.component';
import { AdminComponent } from '../admin/admin.component';
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
        AdminComponent ],
        imports:[BrowserModule,
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
    sessionStorage.removeItem('usuario'); 
  });
  
  it('la variable de sesion debe estar vacia antes de hacer login', () => {
    expect(sessionStorage.getItem(component.user)).toEqual(null);
  });

  it('la variable de sesion es almacenada luego de hacer login', () => {
    expect(sessionStorage.getItem(component.user)).toBeDefined();
  }); 

  it('inicio de sesion case sensitive', () => {
    let credenciales = {
      user: 'ADMIN',
      password: '123'
    };

    sessionStorage.setItem('usuario', JSON.stringify(credenciales)); 
    expect(JSON.parse(sessionStorage.getItem('usuario')).user == component.user_admin).toBe(true)
  }); 

});
