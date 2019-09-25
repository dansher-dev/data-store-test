import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-display-borders',
  templateUrl: './store-display-borders.component.html',
  styleUrls: ['./store-display-borders.component.css']
})
export class StoreDisplayBordersComponent implements OnInit {
  @Input() variable: number;

  constructor() { }

  ngOnInit() {
  }

}
