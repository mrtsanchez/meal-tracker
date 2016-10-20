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
      <label>What did you eat?</label>
      <input #newFood>
      <button>Add</button>
    </div>
  `
})

export class NewMealComponent {

}
