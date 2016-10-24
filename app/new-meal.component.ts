import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>Track a new Meal</h1>
    <form class="form-inline">
      <div class="form-group">
        <input #newFood placeholder="What did you eat?" class="input-lg form-control">
      </div>
      <div class="form-group">
        <label><img src="/resources/images/next.png" alt="  "/></label>
        <input #newCal placeholder="Calories Count" class="form-control input-lg" id="calories">
      </div>
      <div class="form-group">
        <label><img src="/resources/images/next.png" alt="  "/></label>
        <input #newDetails placeholder="Extra Details" class="input-lg form-control">
      </div>
      <div class="form-group">
        <label><img src="/resources/images/next.png" alt="  "/></label>
        <input #newDate type="date" class="input-lg form-control">
      </div>
      <button class="btn btn-danger btn-lg" (click)="addMeal(newFood.value, newCal.value, newDetails.value, newDate.value)" id="plus-button">+</button>
    </form>

  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addMeal(name: string, calories: number, details: string, date: string) {
    var newMealToAdd: Meal = new Meal (name, calories, details, date);
    this.newMealSender.emit(newMealToAdd);
    // console.log(date);
  }

}
