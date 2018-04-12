/*FINAL ANSWER

Complete the following code for the assertion to pass. The result should be an array of numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).*/

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];


// var result = input.map(/* Your code here */);
var result = [];
var solution = input.map(function(num) {
  //console.log(num); //map creates the loop for you
  // for (var i = 0; i < input.length; i++) {
return Math.sqrt(num.x * num.x + num.y * num.y);
  //result.push(Math.sqrt(input[i].x * input[i].x + input[i].y * input[i].y));
  //}
});



console.log(solution);

console.log(solution[0] === 5);
console.log(solution[1] === 13);
console.log(solution[2] === 17);










//NOTES ----------




// var z1 = Math.sqrt(input[0].x * input[0].x + input[0].y * input[0].y);
// var z2 = Math.sqrt(input[1].x * input[1].x + input[1].y * input[1].y);
// var z3 = Math.sqrt(input[2].x * input[2].x + input[2].y * input[2].y);


// console.log(z1);
// console.log(z2);
// console.log(z3);































/*Pythagorean Theorem (x^2 + y^2 = z^2)

Complete the following code for the assertion to pass. The result should be an array of numbers
corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];




var result = [];
var solution = input.map(function(num) {
for (var i = 0; i < input.length; i++) {
  result.push(Math.sqrt(input[i].x * input[i].x + input[i].y * input[i].y));

  }
})





console.log(result);
var z1 = Math.sqrt(input[0].x * input[0].x + input[0].y * input[0].y);
var z2 = Math.sqrt(input[1].x * input[1].x + input[1].y * input[1].y);
var z3 = Math.sqrt(input[2].x * input[2].x + input[2].y * input[2].y);


// console.log(z1);
// console.log(z2);
// console.log(z3);

// console.log(solution[0] === 5);
// console.log(solution[1] === 13);
// console.log(solution[2] === 17);

//anonymous function, parameters, how do you build the array without using result.push */