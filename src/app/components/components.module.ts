import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralCategoriesComponent } from './general-categories/general-categories.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    GeneralCategoriesComponent
  ],
  imports: [
    CommonModule
    , IonicModule
  ],
  exports: [
    GeneralCategoriesComponent
  ]
})
export class ComponentsModule { }
