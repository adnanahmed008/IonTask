import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { UserStoreService } from 'src/app/services';

@Component({
  selector: 'app-people-suggestion',
  templateUrl: './people-suggestion.component.html',
  styleUrls: ['./people-suggestion.component.scss'],
})
export class PeopleSuggestionComponent implements OnInit {
  users: User[] = [];

  constructor(private srvUser: UserStoreService) { }

  ngOnInit() {
    this.users = this.srvUser.get().slice(1);
  }

}
