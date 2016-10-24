import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "date",
  pure: false
})


export class DatePipe implements PipeTransform {
  transform(allMeals: Meal[], targetDate) {
    var filterMeals: Meal[] = [];
    if (targetDate ==="all"){
      return allMeals;
    } else {
    for (var i=0; i<allMeals.length; i++) {
        if (allMeals[i].date === targetDate) {
          filterMeals.push(allMeals[i]);
        }
      }
      return filterMeals;
    }
  }
}
