
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `

  <div class="container-fluid" id="selector">
    <div class="container">
    <label for="filterby" class="filterby-title">FILTER BY</label>
      <select (change)="chooseMealByCalories($event.target.value)" class="input-lg" id="filterby">
        <option value="all" selected="selected">Show All</option>
        <option value="high">Show high-calorie meals</option>
        <option value="low">Show lower-calorie meals</option>
      </select>
    </div>
  </div>

  <div class="container">

    <div class="well" *ngFor="let currentMeal of childMealList | calories:selectedCalories"><h3 (click)="clickMeal(currentMeal)">{{currentMeal.name}}</h3>
      <div *ngIf="expandMeal">
        <p>Calories: {{currentMeal.calories}}</p>
        <p>Description: {{currentMeal.details}}</p>
        <button (click)="showDetails(currentMeal)">Edit</button>
      </div>
    </div>

  </div>
  `
})

export class MealListComponent {

  public selectedCalories: string = "all";

  chooseMealByCalories(caloriesFromMenu) {
    this.selectedCalories = caloriesFromMenu;
    // console.log(this.selectedCalories);
  }

  explandMeal: Meal;
  clickMeal(clickedMeal: Meal) {
    this.expandMeal = clickedMeal;
  }

  @Input() childMealList: Meal[];
  @Output() buttonClicked = new EventEmitter();
  showDetails(mealSelected: Meal) {
    this.buttonClicked.emit(mealSelected);
  }
}
