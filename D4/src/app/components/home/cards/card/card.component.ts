import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  cardText: string =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";
  detailsBool: boolean = false;
  imageSource: string = 'images/1.jpg';
  showDetails() {
    this.detailsBool = !this.detailsBool;
  }
}
