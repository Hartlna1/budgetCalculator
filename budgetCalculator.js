/* 
Programmer: 	Nanette K. Hartley
Language: 		JavaScript
Filename:  		budgetCalculator.js
Date: 			10/9/2013
Description: 	Allows the user to input expenses for budget categories, and returns percentage of budget spent on each.
*/

//declaration and instantiation of variables and constants
var BR = "<br />";						//HTML line break
var ES = " ";							//HTML extra space
var LE = ".";							//HTML line end
var rent = 0.0;							//rent variable
var food = 0.0;							//food variable
var utilities = 0.0;					//utilites variable
var other = 0.0; 						//other expenses variable
var total = 0.0;						//total expenses
var percentage_rent = 0.0;				//percentage rent of total budget
var percentage_food = 0.0;				//percentage food of total budget
var percentage_utilities = 0.0;			//percentage utilities of total budget
var percentage_other = 0.0;				//percentage of total budget for all other expenses		

//Welcome the user to the program
document.write("Welcome to the budget percentage calculator!  We will analyze your budget based on your rent, food, utilities, and all other expenses." + BR + BR);

//Getting user input
rent = prompt("What is your monthly rent payment?");
rent = parseFloat(rent);
food = prompt("What are your monthly expenses on food?");
food = parseFloat(food);
utilities = prompt("What are your monthly expenses on utilities?");
utilities = parseFloat(utilities);
other = prompt("What are the montly expenses on all other items?");
other = parseFloat(other);

//Processing input to provide output 
total = rent + food + utilities + other;					//total of all budget items
percentage_rent = rent/total * 100;							//% of total that is rent
percentage_food = food/total * 100;							//% of total that is food
percentage_utilities = utilities/total * 100;				//% of total that is utilities
percentage_other = other/total * 100;						//% of total that is all other expenses

//Output of data
document.write("Your rent: $" + rent.toFixed(2) + BR);
document.write("Your food: $" + food.toFixed(2) + BR);
document.write("Your utilities: $" + utilities.toFixed(2) + BR);
document.write("Your other expenses: $" + other.toFixed(2) + BR + BR);
document.write("The total of your monthly budget is: $" + total.toFixed(2) + BR + BR);
document.write("The rent percentage is:" + ES + percentage_rent.toFixed(1) + "%" + BR);
document.write("The food percentage is:" + ES + percentage_food.toFixed(1) + "%" + BR);
document.write("The utilities percentage is:" + ES + percentage_utilities.toFixed(1) + "%" + BR);
document.write("The percenatage for all other expense is:" + ES + percentage_other.toFixed(1) + "%" + BR + BR);

//Thank the user and end the program
document.write("Thank you for using our Budget Percentage Calculator!  Have a nice day!")