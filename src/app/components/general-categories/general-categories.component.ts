import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-categories',
  templateUrl: './general-categories.component.html',
  styleUrls: ['./general-categories.component.scss'],
})
export class GeneralCategoriesComponent implements OnInit {
  categories: {
    label: string;
    icon?: string;
    isSelected: boolean;
  }[] = [
      { label: "People", isSelected: false }
      , { label: "Courses", isSelected: false }
      , { label: "Instituions", isSelected: false }
      , { label: "Scholarship", isSelected: false }
      , { label: "Companies", isSelected: false }
      , { label: "More", isSelected: false, icon: "add-outline" }
    ];

  constructor() { }

  ngOnInit() { }

}
