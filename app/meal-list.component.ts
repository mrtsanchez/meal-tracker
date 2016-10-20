
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
  <div class="well" *ngFor="let meal of childMealList"><h3>{{meal.name}}</h3><p>Calories: {{meal.calories}}</p><p>Description: {{meal.details}}</p></div>
  `
})

export class MealListComponent {

  @Input() childMealList: Meal[];

}
