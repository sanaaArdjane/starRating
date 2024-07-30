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


  stars:string[]=['☆','☆','☆','☆','☆']

  @Input() rating:number=1;
  @Output() starEmitter:EventEmitter<number>= new EventEmitter<number>
  handleStarEmitter( index:number=0){
    this.rating=index+1
   this.starEmitter.emit(this.rating);
  }

}
