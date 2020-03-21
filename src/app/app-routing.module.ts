import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SalesCartComponent } from './sales-cart/sales-cart.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'cart', component: SalesCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
