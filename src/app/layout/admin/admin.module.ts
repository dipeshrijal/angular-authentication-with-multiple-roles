import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrandService} from './brand/brand.service';
import {ProductsComponent} from './products/products.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from './products/products.service';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { BrandComponent } from './brand/brand.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ProductListComponent,
  ],
  providers: [
    ProductsService,
    BrandService
  ],
  declarations: [
    ProductsComponent,
    ProductCreateComponent,
    ProductListComponent,
    BrandComponent,
  ]
})
export class AdminModule {
}
