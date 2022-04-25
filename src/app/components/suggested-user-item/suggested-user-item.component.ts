import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-suggested-user-item',
  templateUrl: './suggested-user-item.component.html',
  styleUrls: ['./suggested-user-item.component.scss'],
})
export class SuggestedUserItemComponent implements OnInit {
  @Input() user: User = new User();
  @Input() lines: string = "none";
  @Input() canAdd: boolean = false;

  constructor() { }

  ngOnInit() {}

}
