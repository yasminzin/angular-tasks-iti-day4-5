import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Icategory } from '../../models/icategory';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories!: Icategory[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
