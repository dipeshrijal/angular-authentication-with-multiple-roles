import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from './Product';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  addProduct(product: Product) {
    return this.http.post('http://localhost:3000/api/products', product);
  }

  getAllProducts() {
    return this.http.get('http://localhost:3000/api/products');
  }

}
