import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment-card';
  cardImage = 'assets/images/account_tree_black.svg';
  content =
    "Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply";
  cardTitle = 'Incident Occurance';
}
