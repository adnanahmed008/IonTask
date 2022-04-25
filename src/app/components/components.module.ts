import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralCategoriesComponent } from './general-categories/general-categories.component';
import { IonicModule } from '@ionic/angular';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';



@NgModule({
  declarations: [
    GeneralCategoriesComponent,
    RecentSearchesComponent
  ],
  imports: [
    CommonModule
    , IonicModule
  ],
  exports: [
    GeneralCategoriesComponent,
    RecentSearchesComponent
  ]
})
export class ComponentsModule { }
