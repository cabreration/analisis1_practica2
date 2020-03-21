import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { ProductsService } from '../services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LandingComponent } from '../landing/landing.component';
import { LoginComponent } from '../login/login.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let price:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
        LandingComponent,
        LoginComponent,
        AdminComponent ],imports:[BrowserModule,
        AppRoutingModule,
        FormsModule],
      providers: [ProductsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    price = component['price'];
  });

  it('price should be positive numeric', () => {
    expect(price).toBeGreaterThanOrEqual(0);
  });
});


// Cuando se elimine un producto se debe comprobar que la lista de productos efectivamente tiene un producto menos.
// Al agregar un producto se debe verificar que el valor del campo precio del mismo sea un valor numérico.
// Cuando se agregue un producto se debe comprobar que la lista de productos tiene un producto más de los que tenía anteriormente.
// Al agregar un producto se debe verificar que la lista no contenga el mismo producto más de una vez.
