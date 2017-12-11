import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../admin/products/Product';
import {ProductsService} from '../admin/products/products.service';
import {AuthService} from '../public/login/auth.service';
import {User} from '../public/login/User';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  products: Product[];
  message: String;
  user: User;
  constructor(private auth: AuthService,
              private  router: Router,
              private productService: ProductsService) {
  }

  ngOnInit() {
    this.getAllProducts();
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
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

  logout() {
    this.auth.logout();
    this.router.navigate(['/']).catch();
  }

}
