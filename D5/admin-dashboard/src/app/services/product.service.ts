import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsURL = 'http://localhost:3000/products';
  usersURL = 'http://localhost:3000/users';
  categoriesURL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.productsURL);
  }

  getProductById(productId: string): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.productsURL}/${productId}`);
  }

  addProduct(product: any) {
    return this.http.post<Iproduct>(this.productsURL, product);
  }

  editProdcut(productId: string, product: any) {
    return this.http.put(`${this.productsURL}/${productId}`, product);
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${this.productsURL}/${productId}`);
  }

  getAllCategories(): Observable<Icategory[]> {
    return this.http.get<Icategory[]>(this.categoriesURL);
  }
}
