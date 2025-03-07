import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  listProducts: any;

  ngOnInit(): void {
    this.listProducts = this.productService.getAllProducts();
  }
}
