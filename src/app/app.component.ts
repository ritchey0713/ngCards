import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  posts = [
    {
      title: "Neat Tree",
      username: "nature",
      imageUrl: "assets/images/tree.jpeg",
      content: "I saw a neat tree today"
    },
    {
      title: "Snowy Mountain",
      username: "mountain-lover",
      imageUrl: "assets/images/mountain.jpeg",
      content: "My fave mountain to climb!"
    },
    {
      title: "Bike race",
      username: "biker123",
      imageUrl: "assets/images/biking.jpeg",
      content: "Snapshot from the race today"
    }
  ]
}
