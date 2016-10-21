import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
    <h1>Meal Tracker</h1>
    <p>Track your meals, calories, and stuff like that.</p>
    </div>
    <meal-list
      [childMealList]="mealsTracker"
      (buttonClicked)="displayMeal($event)"
      ></meal-list>
    <new-meal
      (newMealSender)="addMeal($event)"
      ></new-meal>
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
