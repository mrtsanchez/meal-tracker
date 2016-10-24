
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `

  <div class="container-fluid" id="selector">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <label for="filterby" class="filterby-title">FILTER BY CAL:  </label>
          <select (change)="chooseMealByCalories($event.target.value)" class="input-lg" id="filterby">
            <option value="all" selected="selected">Show All</option>
            <option value="high">Show high-calorie meals</option>
            <option value="low">Show lower-calorie meals</option>
          </select>
        </div>
        <div class="col-md-3">
          <label for="filterbyDate" class="filterby-title">BY DATE </label>
          <select (change)="chooseMealByDate($event.target.value)" class="input-lg" id="filterbyDate">
            <option value="all" selected="selected">All Dates</option>
            <option *ngFor="let currentMeal of childMealList" value="{{currentMeal.date}}">{{currentMeal.date}}</option>
          </select>
        </div>
        <div class="col-md-5">
          <label for="calories-goal" class="filterby-title">DAILY CALORIES GOAL:</label>
          <input [(ngModel)]="caloriesGoal" class="input-lg" id="calories-goal">
        </div>
      </div>
    </div>
  </div>

  <div class="container">

    <div class="row">
      <div class="col-md-6">
        <div class="well" id="countCalories"><p>Total calories: {{totalCalories(childMealList| calories:selectedCalories | date:selectedDate)}}.</p>
        <div *ngIf="dailyCalories"><p *ngIf="totalCalories(childMealList| calories:selectedCalories | date:selectedDate) > caloriesGoal">You have exceeded your daily goal of {{caloriesGoal}} calories.</p></div></div>
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

  public caloriesGoal: number = 2000;

  public dailyCalories: boolean = false;

  public selectedCalories: string = "all";

  chooseMealByCalories(caloriesFromMenu) {
    this.selectedCalories = caloriesFromMenu;
  }

  public selectedDate: string = "all";

  chooseMealByDate(dateFromMenu) {
    this.selectedDate = dateFromMenu;
    if(dateFromMenu != "all"){
      this.dailyCalories = true;
    } else {
      this.dailyCalories = false;
    }
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
