import {Component, OnInit} from '@angular/core';
import {Product} from './Product';
import {ProductsService} from './products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  message: String;

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts()
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }, (err) => {
          this.message = err.error.message;
        }
      );
  }

}
