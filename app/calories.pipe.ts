import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})


export class CaloriesPipe implements PipeTransform {
  transform(allMeals: Meal[], chosenCalories) {
    var filterMeals: Meal[] = [];
    if (chosenCalories === "high"){
      for (var i=0; i<allMeals.length; i++){
        if (allMeals[i].calories > 500){
          filterMeals.push(allMeals[i]);
        }
      }
      return filterMeals;
    } else if (chosenCalories === "low"){
      for (var i=0; i<allMeals.length; i++){
        if (allMeals[i].calories < 500){
          filterMeals.push(allMeals[i]);
        }
      }
      return filterMeals;
    } else {
      return allMeals;
    }
  }
}
