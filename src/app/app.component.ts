import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRatingComponent } from "./star-rating/star-rating.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StarRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  yourRating:number=1 //store the rating
  title = 'test-exo';
// Update the rating when it changes
rating(rating:number){
  this.yourRating=rating


}

}
