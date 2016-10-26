# Meal Tracker

#### Epicodus JavaScript Independent Project, 10/21/2016

#### By **Marta Sánchez**

[Github repository](https://github.com/mrtsanchez/meal-tracker)

This is my Angular JS Independent Project for Epicodus. It's a meal tracking application. Users can log foods they've eaten each day, including details about the meal and its number of calories.

![app-screenshot](https://github.com/mrtsanchez/meal-tracker/blob/master/resources/images/mealtracker_app.png)

## Setup/Installation Requirements

To run app locally: In terminal, navigate to your desktop and execute:
  * `$ git clone https://github.com/mrtsanchez/Github-User-Lookup`
  * `$ npm install`
  * `$ bower install`
  * `$ gulp build`
  * `$ gulp serve`

## Known Bugs

There are no known bugs.


## Technologies Used

HTML, Javascript, Angular JS, Typescript, CSS.

## User Stories:

* I want to log a food I have eaten by submitting a form with food name, calories and details.
* I want to view a list of foods I have logged.
* I want options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).
* I want to click a food to edit its name, details or calories (in case I decide to pretend my fries were 100 calories instead of 365).

## Specs

| Behaviour  | Input | Output |
| ------------- |:-------------:| -----|
| The user should be able to log a food with name, calories and details.     | I ate for breakfast oatmeal and a banana, 100 calories | The app tracks the food name, calories and details. |
| The user should be able to edit the food name, calories and details     | fries: 365 calories >>> fries: 100 calories. | update the value for calories from 365 to 100. |
| The user should be able to view only high-calorie foods. | select "view only high-calorie foods" | Display only foods with more than 500 calories |
| The user should be able to view only low-calorie foods.    | select "view only lof-calorie foods" | Display only foods with less than 500 calories |

### License

Published under MIT License.

Copyright (c) 2016 **_Marta Sánchez_**
