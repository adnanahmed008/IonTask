import { Component, OnInit } from '@angular/core';
import { ESearchType } from 'src/app/enums';
import { IRecentSearch } from 'src/app/interfaces';
import { InstituteStoreService, UserStoreService } from 'src/app/services';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
})
export class RecentSearchesComponent implements OnInit {
  searches: IRecentSearch[] = [
    { type: ESearchType.TEXT, text: "I want to study marketing in England" },
    { type: ESearchType.TEXT, text: "Institution that offer medical in Malaysia" }
  ];

  constructor(private srvUser: UserStoreService
    , private srvInstitutes: InstituteStoreService) { }

  ngOnInit() {
    let firstUser = this.srvUser.get()[0];
    let firstInstitute = this.srvInstitutes.get()[0];

    this.searches.push({
      type: ESearchType.USER,
      user: firstUser
    });

    this.searches.push({
      type: ESearchType.INSTITUTE,
      institute: firstInstitute
    });
  }

  get ESearchType() { return ESearchType; }
}
