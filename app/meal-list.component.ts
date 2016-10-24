
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `

  <div class="container-fluid" id="selector">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
        <label for="filterby" class="filterby-title">FILTER BY CALORIES</label>
          <select (change)="chooseMealByCalories($event.target.value)" class="input-lg" id="filterby">
            <option value="all" selected="selected">Show All</option>
            <option value="high">Show high-calorie meals</option>
            <option value="low">Show lower-calorie meals</option>
          </select>
        </div>
        <div class="col-md-6">
        <label for="filterbyDate" class="filterby-title">FILTER BY DATE</label>
          <select (change)="chooseMealByDate($event.target.value)" class="input-lg" id="filterbyDate">
            <option value="all" selected="selected">All Dates</option>
            <option *ngFor="let currentMeal of childMealList" value="{{currentMeal.date}}">{{currentMeal.date}}</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <div class="container">

    <div class="row">
      <div class="col-md-6">
        <div class="well" id="countCalories" *ngIf="allCalories"><p>Total calories: {{totalCalories(childMealList)}}</p></div>
        <div class="well" *ngFor="let currentMeal of childMealList | calories:selectedCalories | date:selectedDate"><h3 (click)="clickMeal(currentMeal)">{{currentMeal.name}}</h3>
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
            <p>Date: {{expandMeal.date}}</p>
          </div>
          <div class="panel-footer text-right"><button (click)="showDetails(expandMeal)" class="btn btn-danger">Edit</button></div>
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

  public allCalories: boolean = true;

  public selectedCalories: string = "all";

  chooseMealByCalories(caloriesFromMenu) {
    this.selectedCalories = caloriesFromMenu;
    if(caloriesFromMenu != "all"){
      this.allCalories = false;
    } else {
      this.allCalories = true;
    }
  }

  public selectedDate: string = "all";

  chooseMealByDate(dateFromMenu) {
    this.selectedDate = dateFromMenu;
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

  totalCalories(loggedMeals:Meal[]){
    var calories = 0;
    for (var i = 0; i < loggedMeals.length; i++) {
      calories += loggedMeals[i].calories;
    }
    return calories;
  }

  @Input() childMealList: Meal[];

}
