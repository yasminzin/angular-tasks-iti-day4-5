import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  productId: any;

  ngOnInit(): void {
    // routing from edit to add make angular improve the performance by not rendering again the component
    // so this function will not be called (this function is called in the time of first render) because angular is not rendering the component again
    // old way >> this.activatedRoute.snapshot.paramMap.get('id'); >> can't get the id when changed in url
    // new way using observer pattern >> this.activatedRoute.paramMap.subscribe({}) >> it makes observable that watches the changing of id in url
    // to get the id observer must subscribe to the observable and get the response >> productId after routing
    this.productId = this.activatedRoute.paramMap.subscribe({
      next: (response) => {
        this.productId = response.get('id');
        if (this.productId != 0) {
          this.productService.getProductById(this.productId).subscribe({
            next: (response) => {
              this.getName.setValue(response.name ?? '');
              this.getCategory.setValue(response.category ?? '');
              this.getPrice.setValue(response.price.toString() ?? '');
              this.getQuantity.setValue(response.quantity.toString() ?? '');
              this.getImage.setValue(response.image ?? '');
            },
            error: (error) => {
              console.log(error);
            },
          });
        } else {
          this.getName.setValue('');
          this.getCategory.setValue('');
          this.getPrice.setValue('');
          this.getQuantity.setValue('');
          this.getImage.setValue('');
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
    // if (this.productId != 0) {
    // }
  }

  // object to control the form
  // object to control inputs
  productForm = new FormGroup({
    // can set default value
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(5)]),
    quantity: new FormControl('5', [
      Validators.required,
      Validators.pattern(/[0-9]+/),
    ]),
    image: new FormControl('', [Validators.required]),
  });

  get getName() {
    return this.productForm.controls['name'];
  }
  get getCategory() {
    return this.productForm.controls['category'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }
  get getImage() {
    return this.productForm.controls['image'];
  }

  productHandler() {
    if (this.productForm.status == 'VALID') {
      this.productId = this.activatedRoute.paramMap.subscribe({
        next: (response) => {
          this.productId = response.get('id');
          if (this.productId == 0) {
            this.productService.addProduct(this.productForm.value).subscribe({
              next: () => {
                this.router.navigate(['/menu']);
              },
              error: (error) => {
                console.log(error);
              },
            });
          } else {
            this.productService
              .editProdcut(this.productId, this.productForm.value)
              .subscribe({
                next: () => {
                  this.router.navigate(['/menu']);
                },
                error: (error) => {
                  console.log(error);
                },
              });
          }
        },
      });
    } else {
      console.log('Fix Errors');
    }
  }
}
