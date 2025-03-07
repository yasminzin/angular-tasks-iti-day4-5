import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  productId: any;
  productDetails: any;

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.productId);
    let product = this.productService
      .getAllProducts()
      .filter((product) => product.id == this.productId);
    this.productDetails = product
  }
}
