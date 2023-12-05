import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-valorar-r2',
  templateUrl: './valorar-r2.page.html',
  styleUrls: ['./valorar-r2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ValorarR2Page implements OnInit {

  stars: { icon: string; color: string }[] = [
    { icon: 'star-outline', color: 'medium' },
    { icon: 'star-outline', color: 'medium' },
    { icon: 'star-outline', color: 'medium' },
    { icon: 'star-outline', color: 'medium' },
    { icon: 'star-outline', color: 'medium' },
  ];

  @Input() initialRating: number = 0;
  @Input() readonly: boolean = false;
  @Input() alignment = 'center';
  @Input() size: string = '2rem';
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.setRating(this.initialRating);
  }

  rate(value: number) {
    if (!this.readonly) {
      this.setRating(value);
    }
  }

  setRating(rating: number) {
    for (let i = 0; i < this.stars.length; i++) {
      if (rating >= i + 1) {
        this.stars[i].icon = 'star';
        this.stars[i].color = 'warning';
      } else if (rating > i) {
        this.stars[i].icon = 'star-half';
        this.stars[i].color = 'warning';
      } else {
        this.stars[i].icon = 'star-outline';
        this.stars[i].color = 'medium';
      }
    }
    this.ratingChange.emit(rating);
  }

}




