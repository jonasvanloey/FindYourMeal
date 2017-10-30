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
import {SearchBoxService} from './header/search-box.service';

import {SearchBoxComponent} from './header/search-box/search-box.component';

import { AccountComponent } from './account/account.component';
import { AccountLoginComponent } from './account/account-login/account-login.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { AccountSignupComponent } from './account/account-signup/account-signup.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {AuthService} from "./account/auth.service";
import { AccountHistoryComponent } from './account/account-history/account-history.component';

// export const firebaseConfig = {
//   apiKey: "AIzaSyD3fnwS561PI6oc6P-uzEx8WsM5Nx7mrXg",
//     authDomain: "findyourmeal-acb2b.firebaseapp.com",
//     databaseURL: "https://findyourmeal-acb2b.firebaseio.com",
//     projectId: "findyourmeal-acb2b",
//     storageBucket: "findyourmeal-acb2b.appspot.com",
//     messagingSenderId: "121974858612"
// };


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
    SearchBoxComponent,
    AccountComponent,
    AccountLoginComponent,
    AccountSignupComponent,
    AccountHistoryComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  providers: [GerechtService, IngredientService, SearchBoxService,AngularFireDatabase,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
