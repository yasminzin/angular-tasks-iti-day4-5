import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit {
  showObj: { imageSource: string; show: boolean }[] = [
    { imageSource: 'images/4.png', show: true },
    { imageSource: 'images/1.jpg', show: false },
    { imageSource: 'images/3.jpg', show: false },
  ];
  count: number = 0;
  imageSource: string = '';
  moveSlider: any = false;

  previous() {
    this.showObj.forEach((element) => {
      element.show = false;
    });
    this.count--;
    if (this.count < 0) {
      this.count = this.showObj.length - 1;
    }
    this.showObj[this.count].show = true;
  }

  next() {
    this.showObj.forEach((element) => {
      element.show = false;
    });
    this.count++;
    if (this.count >= this.showObj.length) {
      this.count = 0;
    }
    this.showObj[this.count].show = true;
  }

  ngOnInit() {
    this.moveSlider = setInterval(() => {
      this.next();
    }, 3000);
  }

  stop() {
    if (this.moveSlider) {
      clearInterval(this.moveSlider);
      this.moveSlider = false;
    }
  }
}
