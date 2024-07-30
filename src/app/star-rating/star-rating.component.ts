import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {

// Array to represent stars
  stars:string[]=['☆','☆','☆','☆','☆']


// Input to receive the rating from  app component
  @Input() rating:number=1;


  //Output to emit events when the rating change
  @Output() starEmitter:EventEmitter<number>= new EventEmitter<number>

  //handle star clicks and emit the new rating

  handleStarEmitter( index:number=0){
    this.rating=index+1
   this.starEmitter.emit(this.rating);// Emit the rating value
  }

}
