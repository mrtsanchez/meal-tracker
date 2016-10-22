import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  template: `

  <div class="panel panel-default" *ngIf="ChildSelectedMeal">
    <div class="panel-heading">
      <h3 class="panel-title">Edit Meal:</h3>
    </div>
    <div class="panel-body">

    <div class="edit-meal">
      <label>Enter Meal Name:</label>
      <input [(ngModel)]="ChildSelectedMeal.name" class="input-sm edit-field">
    </div>
    <div class="edit-meal">
      <label>Enter Meal Calories:</label>
      <input [(ngModel)]="ChildSelectedMeal.calories" class="input-sm edit-field">
    </div>
    <div class="edit-meal">
      <label>Enter Meal Description:</label>
      <input [(ngModel)]="ChildSelectedMeal.details" class="input-sm edit-field">
    </div>
    </div>
    <div class="panel-footer text-right"><button (click)="doneClicked()" class="btn btn-danger">Done</button></div>
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
