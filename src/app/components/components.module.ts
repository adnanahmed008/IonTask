import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralCategoriesComponent } from './general-categories/general-categories.component';
import { IonicModule } from '@ionic/angular';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
import { PeopleSuggestionComponent } from './people-suggestion/people-suggestion.component';
import { SuggestedUserItemComponent } from './suggested-user-item/suggested-user-item.component';
import { BestCoursesComponent } from './best-courses/best-courses.component';
import { CourseItemComponent } from './course-item/course-item.component';



@NgModule({
  declarations: [
    GeneralCategoriesComponent,
    RecentSearchesComponent,
    PeopleSuggestionComponent,
    SuggestedUserItemComponent,
    BestCoursesComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule
    , IonicModule
  ],
  exports: [
    GeneralCategoriesComponent,
    RecentSearchesComponent,
    PeopleSuggestionComponent,
    SuggestedUserItemComponent,
    BestCoursesComponent,
    CourseItemComponent
  ]
})
export class ComponentsModule { }
