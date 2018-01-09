import {Component, OnInit, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Image} from '../../models/product.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  @Input() images: {};

  activeSlide: Image;

  constructor() {}

  ngOnInit() {
    this.activeSlide = this.images[0];
  }

  changeSlide(slide) {
    this.activeSlide = slide;
  }
}
