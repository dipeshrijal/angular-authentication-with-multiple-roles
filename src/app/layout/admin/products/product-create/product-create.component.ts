import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BrandService} from '../../brand/brand.service';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: FormGroup;
  brands;

  constructor(private fb: FormBuilder,
              private productService: ProductsService,
              private brandService: BrandService,
              private router: Router) {
  }

  ngOnInit() {
    this.product = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      size: ['', Validators.required],
      quantity: ['', Validators.required],
    });
    this.brandService.getBrands()
      .subscribe(
        (brands) => {
          console.log(brands);
          this.brands = brands;
        }
      );
  }

  addProduct() {
    // prevent user from submitting an invalid form.
    console.log(this.product.value);
    if (this.product.invalid) {
      return;
    }
    this.productService.addProduct(this.product.value).
    subscribe(
      data => {
        this.router.navigate(['admin/products'])
          .catch(
            err => console.log(data, err)
          );
      }, (err) => {
        console.log(err);
      }
    );
  }

  isValid(control: string): string {
    return this.product.controls[control].invalid && this.product.controls[control].touched ? 'is-invalid' : '';
  }

}
