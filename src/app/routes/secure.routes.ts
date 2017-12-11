import {Routes} from '@angular/router';
import {ProductsComponent} from '../layout/admin/products/products.component';
import {HomeComponent} from '../layout/secure/home/home.component';

export const SECURE_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
];
