import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
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
import {HttpModule} from '@angular/http';
import {GerechtService} from './gerecht/gerecht.service';
import {IngredientService} from './ingredient/ingredient.service';
import { SearchBoxComponent } from './header/search-box/search-box.component';
import {SearchBoxService} from './header/search-box.service';

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
    IngredientDetailComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GerechtService, IngredientService, SearchBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
