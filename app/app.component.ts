import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Lato" rel="stylesheet">
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">MEAL TRACKER APP</a>
      </div>
    </div>
  </nav>

  <div class="jumbotron">
    <div class="container">
    <new-meal
      (newMealSender)="addMeal($event)"
      ></new-meal>
    </div>
  </div>

  <meal-list
    [childMealList]="mealsTracker"
    (buttonClicked)="displayMeal($event)"
    ></meal-list>

  <div class="container">

    <edit-meal
      [ChildSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
      ></edit-meal>
  </div>
  `
})

export class AppComponent {
  public mealsTracker: Meal[] = [
    new Meal("Tostada", 200, "Desayuno"),
    new Meal("Gocheria", 600, "Comida"),
    new Meal("Pesca", 100, "Cena"),
  ];
  addMeal(newMealFromChild: Meal) {
    this.mealsTracker.push(newMealFromChild);
  }
  selectedMeal: Meal = null;
  displayMeal(clickedMeal: Meal) {
  this.selectedMeal = clickedMeal;
  // console.log("this.selectedMeal");
  }
  finishedEditing() {
  this.selectedMeal = null;
  }
}
