import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
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

  </div>
  `
})

export class AppComponent {
  public mealsTracker: Meal[] = [
    new Meal("Steak with Fries", 665, "Lunch"),
    new Meal("Grilled Cheese", 300, "Dinner"),
    new Meal("Yogurt and Granola", 100, "Breakfast"),
    new Meal("Banana", 50, "Snack"),
    new Meal("Ice Cream", 700, "Snack"),
  ];
  addMeal(newMealFromChild: Meal) {
    this.mealsTracker.push(newMealFromChild);
  }
  // selectedMeal: Meal = null;
  // displayMeal(clickedMeal: Meal) {
  // this.selectedMeal = clickedMeal;
  // // console.log("this.selectedMeal");
  // }
  // finishedEditing() {
  // this.selectedMeal = null;
  // }
}
