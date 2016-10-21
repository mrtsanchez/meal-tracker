
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
  <div class="well" *ngFor="let currentMeal of childMealList"><h3>{{currentMeal.name}}</h3><p>Calories: {{currentMeal.calories}}</p><p>Description: {{currentMeal.details}}</p>
  <button (click)="showDetails(currentMeal)">Edit</button></div>
  `
})

export class MealListComponent {

  @Input() childMealList: Meal[];
  @Output() buttonClicked = new EventEmitter();
  showDetails(mealSelected: Meal) {
    this.buttonClicked.emit(mealSelected);
  }
}
