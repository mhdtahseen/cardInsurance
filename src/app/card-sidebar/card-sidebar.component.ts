import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-sidebar',
  templateUrl: './card-sidebar.component.html',
  styleUrls: ['./card-sidebar.component.css'],
})
export class CardSidebarComponent implements OnInit {
  imgPath = 'assets/images/account_tree_black.svg';
  @Input() cardContent: string = '';
  @Input() cardTitle: string = '';
  @Input() cardImage: string = '';
  @Input() cardColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
