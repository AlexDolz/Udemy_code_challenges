'use strict';

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// let MarksWeight1 = 78;
// let MarksHeight1 = 1.69;
// let JohnsWeight1 = 92;
// let JohnsHeight1 = 1.95;

// let MarksBmi1 = MarksWeight1 / MarksHeight1 ** 2;
// console.log(MarksBmi1);

// let JohnsBmi1 = JohnsWeight1 / (JohnsHeight1 * JohnsHeight1);
// console.log(JohnsBmi1);

// let MarkHigherBMI1 = MarksBmi1 > JohnsBmi1;
// console.log(MarkHigherBMI1);

// let MarksWeight2 = 95;
// let Marksheight2 = 1.88;
// let JohnsWeight2 = 85;
// let JohnsHeight2 = 1.76;

// let MarksBmi2 = MarksWeight2 / Marksheight2 ** 2;
// console.log(MarksBmi2);

// let JohnsBmi2 = JohnsWeight2 / (JohnsHeight2 * JohnsHeight2);
// console.log(JohnsBmi2);

// let MarkHigherBMI2 = MarksBmi2 > JohnsBmi2;
// console.log(MarkHigherBMI2);

//*********************************************** */

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

// if (MarksBmi1 > JohnsBmi1) {
//   console.log(
//     `Mark's BMI (${MarksBmi1}) is higher than John's BMI (${JohnsBmi1})`
//   );
// } else {
//   console.log(`John's BMI (${JohnsBmi1}) is higher than Mark's (${MarksBmi1})`);
// }

// if (MarksBmi2 > JohnsBmi2) {
//   console.log(
//     `Mark's BMI (${MarksBmi2}) is higher than John's BMI ${JohnsBmi2}`
//   );
// } else {
//   console.log(`John's BMI (${JohnsBmi2}) is higher than Mark's (${MarksBmi2})`);
// }

//************************************************************** */
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// 1 exercise
// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;
// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas) {
//   console.log("Dolphins won!");
// } else if (averageKoalas > averageDolphins) {
//   console.log("Koalas won!");
// } else {
//   console.log("Draw!");
// }

// bonus 1
// const averageDolphins = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 123) / 3;

// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//   console.log("Dolphins won!");
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//   console.log("Koalas won!");
// } else {
//   console.log("Draw!");
// }

// bonus 2
// const averageDolphins = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 106) / 3;

// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//   console.log("Dolphins won!");
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//   console.log("Koalas won!");
// } else if (
//   averageDolphins === averageKoalas &&
//   averageDolphins >= 100 &&
//   averageKoalas >= 100
// ) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("No one win the trophy!");
// }

//*************************************************** */
/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

// const billValue = 430;
// const tip =
//   billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
// console.log(
//   `The bill was ${billValue}, the tip was ${tip}, and the total value ${
//     billValue + tip
//   }`
// );

//********************************************************* */
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/

// Test 1
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(95, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

//********************************************************** */
// Coding Challenge # 2
/*
Steven is still building his tip calculator , using
the same rules as before : Tip 15 % of the bill if the
bill value is between 50 and 300 , and if the value is
different , the tip is 20 % .
1. Write a function ' calcTip ' that takes any bill
value as an input and returns the corresponding tip ,
calculated based on the rules above ( you can check
out the code from first tip calculator challenge if
you need to ) . Use the function type you like the
most . Test the function using bill value of 100 .
2. And now let's use arrays ! So create an array
' bills ' containing the test data below .
3. Create an array ' tips ' containing the tip value
for each bill , calculated from the function you
created before .
4. BONUS : Create an array ' total ' containing the
total values , so the bill + tip .
TEST DATA : 125 , 555 and 44

HINT : Remember that an array needs a value in each
position , and that value can actually be the returned
value of a function ! So you can just call a function
as array values ( so don't store the tip values in
separate variables first , but right in the new array )
*/

// const calcTip = function (bill) {
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// };
// // const calcTip = bill = > bill > = 50 && bill < = 300 ?
// // bill * 0.15 : bill * 0.2 ;  //to ze samoje tolko arrow function

// // console.log(calcTip(400));
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

//******************************************************* */
/*Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

// const mark = {
//   name: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   name: "John Smith",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s (${mark.bmi})`
//   );
// } else {
//   console.log(
//     `${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s (${john.bmi})`
//   );
// }

// *****************************************************
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// };
// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }

//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// *********************CHALLENGE 1 DEVELOPER Skills**********************
/*Developer Skills & Editor Setup
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]*/

// 1) Understanding the problem
// -Array transformed to string, separated by ...
// -What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// -Transform array into string
// -Transform each element to string with ºC
// -Strings needs to contain day (index + 1)
// -Add ... between elements and starts and end of string
// -Log string to console

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log('... ' + str);
// };
// printForecast(data1);

// 2+3=5+4=9
// [2,3,4]

// *************REPEAT CHALLENGE**************************
/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// const marksWeight = 78;
// const marksHeight = 1.69;

// const johnsWeight = 92;
// const johnsHeight = 1.95;

// const marksWeight2 = 95;
// const marksHeight2 = 1.88;

// const johnsWeight2 = 85;
// const johnsHeight2 = 1.76;

// let BMI1 = (mass, height) => {
//   return mass / height ** 2;
// };
// let BMI2 = (mass, height) => {
//   return mass / height ** 2;
// };

// console.log(BMI1(marksWeight, marksHeight));
// console.log(BMI1(johnsWeight, johnsHeight));

// console.log(BMI2(marksWeight2, marksHeight2));
// console.log(BMI2(johnsWeight2, johnsHeight2));

// const MarkHigherBMI1 =
//   BMI1(marksWeight, marksHeight) > BMI1(johnsWeight, johnsHeight);
// console.log(MarkHigherBMI1);
// const MarkHigherBMI2 =
//   BMI2(marksWeight2, marksHeight2) > BMI2(johnsWeight2, johnsHeight2);
// console.log(MarkHigherBMI2);

// const marksBmi = BMI1(marksWeight, marksHeight);
// const johnsBmi = BMI1(johnsWeight, johnsHeight);

// *******************************END**********************************

// ********************REPEAT CHALLENGE 2*****************************

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

// if (marksBmi > johnsBmi) {
//   console.log(`Mark's BMI(${marksBmi}) is higher than Johns's!(${johnsBmi})`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }

// *****************************END 2 ***********************************

// *******************************Challenge 3 repeat*********************
/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;

// if (averageDolphins > averageKoalas) {
//   console.log('Dolphins win');
// } else if (averageDolphins < averageKoalas) {
//   console.log('Koalas win');
// } else{
//   console.log('Draw');
// }

// const averageDolphins = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 123) / 3;

// if (averageDolphins > averageKoalas && averageDolphins > 100) {
//   console.log('Dolphins win');
// } else if (averageKoalas > averageDolphins && averageKoalas > 100) {
//   console.log('Koalas win');
// } else{
//   console.log('Draw');
// }

// const averageDolphins = (91 + 11 + 10) / 3;
// const averageKoalas = (11 + 95 + 16) / 3;

// if (averageDolphins > averageKoalas && averageDolphins > 100) {
//   console.log('Dolphins win');
// } else if (averageKoalas > averageDolphins && averageKoalas > 100) {
//   console.log('Koalas win');
// } else if(averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100){
//   console.log('Both win the trophy');

// }else{
//   console.log('No team wins the trophy');
// }
// ***************************************END**************************

// ****************************REPEAT CHALLENGE 4************************

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

// const billValue = 430;

// const tip =
//   billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// console.log(
//   `The bill was ${billValue}, the tip was ${tip}, and the total value ${
//     billValue + tip
//   }`
// );

// ************************************END*********************

// ***********************REPEAT CHALLENGE 5****************************
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const avgDolhins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// };

// checkWinner(avgDolhins, avgKoalas);

// ****************************************END***************************
