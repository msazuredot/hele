import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './cities/city-details/city-details.component';
import { CityComponent } from './cities/city/city.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AcitvityListComponent } from './activities/acitvity-list/acitvity-list.component';
import { AcitvityListEditComponent } from './activities/acitvity-list-edit/acitvity-list-edit.component';
import { AcitvityComponent } from './activities/acitvity/acitvity.component';
import { CityListComponent } from './cities/city-list/city-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitiesComponent,
    CityDetailsComponent,
    CityComponent,
    ActivitiesComponent,
    AcitvityListComponent,
    AcitvityListEditComponent,
    AcitvityComponent,
    CityListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
