
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
    <div class="row">
      <div class="col-md-6">
        <div class="well" *ngFor="let currentMeal of childMealList | calories:selectedCalories"><h3 (click)="clickMeal(currentMeal)">{{currentMeal.name}}</h3>
        </div>
      </div>

      <div class="col-md-6">
        <div class="panel panel-default" *ngIf="expandMeal">
          <div class="panel-heading">
            <h3 class="panel-title">Details on {{expandMeal.name}}</h3>
          </div>
          <div class="panel-body">
            <p>Calories: {{expandMeal.calories}}</p>
            <p>Description: {{expandMeal.details}}</p>
          </div>
          <div class="panel-footer"><button (click)="showDetails(expandMeal)">Edit</button></div>
        </div>
        <edit-meal
          [ChildSelectedMeal]="selectedMeal"
          (doneClickedSender)="finishedEditing()"
        ></edit-meal>
      </div>
    </div>
  </div>
  `
})

export class MealListComponent {

  public selectedCalories: string = "all";

  chooseMealByCalories(caloriesFromMenu) {
    this.selectedCalories = caloriesFromMenu;
  }

  expandMeal: Meal = null;
  clickMeal(clickedMeal: Meal) {
    this.expandMeal = clickedMeal;
  }

  selectedMeal: Meal = null;
  showDetails(currentMeal: Meal) {
    this.selectedMeal = currentMeal;
  }

  finishedEditing() {
  this.selectedMeal = null;
  }

  @Input() childMealList: Meal[];

}
