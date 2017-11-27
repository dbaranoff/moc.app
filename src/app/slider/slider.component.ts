import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

	@Input() images: {};
	
	private activeSlide: any[];
	
  constructor() { }

  ngOnInit() { 
		this.activeSlide = this.images[0];
	}

	changeSlide(slide) {
		this.activeSlide = slide;
	}
}
