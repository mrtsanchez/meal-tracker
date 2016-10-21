
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
  <select (change)="chooseMealByCalories($event.target.value)">
  <option value="all" selected="selected">Show All</option>
  <option value="high">Show high-calorie meals</option>
  <option value="low">Show lower-calorie meals</option>
  </select>
  <div class="well" *ngFor="let currentMeal of childMealList | calories:selectedCalories"><h3>{{currentMeal.name}}</h3><p>Calories: {{currentMeal.calories}}</p><p>Description: {{currentMeal.details}}</p>
  <button (click)="showDetails(currentMeal)">Edit</button></div>
  `
})

export class MealListComponent {

  public selectedCalories: string = "all";

  chooseMealByCalories(caloriesFromMenu) {
    this.selectedCalories = caloriesFromMenu;
    console.log(this.selectedCalories);
  }

  @Input() childMealList: Meal[];
  @Output() buttonClicked = new EventEmitter();
  showDetails(mealSelected: Meal) {
    this.buttonClicked.emit(mealSelected);
  }
}
