import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>Track a new Meal</h1>
    <div>
      <label>What did you eat?</label>
      <input #newFood>
    </div>
    <div>
      <label>Calories count:</label>
      <input #newCal>
    </div>
    <div>
      <label>Enter details:</label>
      <input #newDetails>
      <button (click)="addMeal(newFood.value, newCal.value, newDetails.value)">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addMeal(name: string, calories: number, details: string) {
    var newMealToAdd: Meal = new Meal (name, calories, details);
    this.newMealSender.emit(newMealToAdd);
  }

}
