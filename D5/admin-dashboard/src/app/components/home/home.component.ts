import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-home',
  imports: [SliderComponent, CategoriesComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
