import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [SliderComponent, AboutComponent, CardsComponent, CardsComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
