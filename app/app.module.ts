import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './new-meal.component'
import { FormsModule }   from '@angular/forms';
import { EditMealComponent } from './edit-meal.component'
import { CaloriesPipe } from './calories.pipe'
import { DatePipe } from './date.pipe'
// import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
    // MomentModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    NewMealComponent,
    EditMealComponent,
    CaloriesPipe,
    DatePipe,
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
