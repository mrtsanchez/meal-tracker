import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  template: `

  <div *ngIf="ChildSelectedMeal">
    <h1>Edit Task</h1>
    <div>
      <label>Enter Meal Name:</label>
      <input [(ngModel)]="ChildSelectedMeal.name">
    </div>
    <div>
      <label>Enter Meal Calories:</label>
      <input [(ngModel)]="ChildSelectedMeal.calories">
    </div>
    <div>
      <label>Enter Meal Description:</label>
      <input [(ngModel)]="ChildSelectedMeal.details">
      <button (click)="doneClicked()">Done</button>
    </div>
  </div>

  `
})

export class EditMealComponent {
  @Input() ChildSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
