import {Routes} from '@angular/router';
import {ProductsComponent} from '../layout/admin/products/products.component';
import {AdminAreaComponent} from '../layout/admin/admin-area/admin-area.component';
import {ProductCreateComponent} from '../layout/admin/products/product-create/product-create.component';
import {AuthGuard} from '../layout/public/login/auth.guard';


export const ADMIN_ROUTES: Routes = [
  {
    path: 'admin', component: AdminAreaComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: 'products/create', component: ProductCreateComponent},
    ]
  },
];
