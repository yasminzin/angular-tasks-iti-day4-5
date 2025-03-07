import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  arrayOfProducts: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }[] = [
    { id: 1, name: 'food1', quantity: 2, price: 30 },
    { id: 2, name: 'food2', quantity: 4, price: 50 },
    { id: 3, name: 'food3', quantity: 8, price: 20 },
    { id: 4, name: 'food4', quantity: 0, price: 40 },
    { id: 5, name: 'food5', quantity: 1, price: 60 },
    { id: 6, name: 'food6', quantity: 0, price: 30 },
  ];
  getAllProducts() {
    return this.arrayOfProducts;
  }
}
