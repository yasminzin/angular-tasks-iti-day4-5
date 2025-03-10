import { CommonModule } from '@angular/common';
import { Iproduct } from '../../../models/iproduct';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  products!: Iproduct[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteProduct(productId: any) {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter((product)=> product.id != productId)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
