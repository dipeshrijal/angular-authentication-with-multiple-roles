import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class BrandService {

  constructor(private http: HttpClient) {
  }

  getBrands() {
    return this.http.get('http://localhost:3000/api/brands');
  }

}
