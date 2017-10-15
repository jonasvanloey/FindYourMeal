import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GerechtComponent } from './gerecht/gerecht.component';
import { GerechtListComponent } from './gerecht/gerecht-list/gerecht-list.component';
import { GerechtItemComponent } from './gerecht/gerecht-list/gerecht-item/gerecht-item.component';
import { GerechtDetailComponent } from './gerecht/gerecht-detail/gerecht-detail.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientListComponent } from './ingredient/ingredient-list/ingredient-list.component';
import { IngredientItemComponent } from './ingredient/ingredient-list/ingredient-item/ingredient-item.component';
import { IngredientDetailComponent } from './ingredient/ingredient-detail/ingredient-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GerechtComponent,
    GerechtListComponent,
    GerechtItemComponent,
    GerechtDetailComponent,
    IngredientComponent,
    IngredientListComponent,
    IngredientItemComponent,
    IngredientDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
