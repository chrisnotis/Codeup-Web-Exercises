// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array



// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var color = colors[Math.floor(Math.random()*colors.length)];

// var favorite = 'blue'; // TODO: change this to your favorite color from the list



// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

// ********************************************************************************************
                      //   ELSE IF EXERCISE
//********************************************************************************************* 

// if(color==="red") {
// 	console.log("red is your color and is also the color of an apple")
// }else if(color=== "orange"){
// 	console.log("orange is your color as well as the color of an orange")
// }else if(color==="yellow") {
// 	console.log("yellow and yellow is a banana")
// }else if(color==="green"){
// 	console.log("green - how about a pear?")
// }else if(color==="blue") {
// 	console.log("blue is blue is blue")
// }else{
// 	console.log("I do not know anything by that color")
// }

// (color===favorite) ? console.log("is your favorite color") : console.log("not your favorite color");

// ********************************************************************************************
                      //   SWITCH IF EXERCISE
//********************************************************************************************* 

// 

// ********************************************************************************************
                      //   DO WHILE EXERCISE
//*********************************************************************************************

// var myNum = 2

// while (myNum < 66000) {
// 	console.log("Not quite there " + myNum);
// 	myNum*=2;
// }

// ********************************************************************************************
                      //   FOR EXERCISE
//*********************************************************************************************

// for (var j = 100 ; j >=1 ; j-=5) { 
// 	console.log(j);
//  }

 // ********************************************************************************************
                      //   BREAK EXERCISE and CONTINUE
//*********************************************************************************************

// do {
// 	var num = Math.floor((Math.random()*50)+1)
// } while (num % 2 ==0) {
// 	console.log("random odd: " +num)
// };

// for (num = 1 ; num <= 50 ; num++) {
// 	if(num % 2 !==0) {
// 		console.log("ha ha odd: " +num);                                           
// 	}
// }

 // ********************************************************************************************
                      //   TERNARY EXAMPLES
//*********************************************************************************************

// (color==="red")?console.log("red"):console.log("not red");

// isYellow = (color==="yellow")?true:false;

/* other way to comment out multiple line code in JavaScript
    Second line 
    Third line... then end with */
  
 // ********************************************************************************************
                      //   FUNCTIONS EXAMPLES
//*********************************************************************************************

// function sum(numberOne, numberTwo){
//   return numberOne + numberTwo;
// }

// console.log (sum(10,11));


// function isEven(input) {
//   var remainder = input % 2;
//   if (remainder === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(20));
// console.log(isEven(213));
// console.log(isEven(202345345));

// function toGoldBars(){

// }

// function toGoldBars(numberOfUSD) {
//   return numberOfGoldBars / 500000;
// }

// function toUSD(numberOfGoldBars) {
//   return numberOfGoldBars * 500000;
// }

// var goldBarCount = prompt("how many gold bars do you have?");
// console.log(toUSD(goldBarCount));

// function isThisEnoughForATank(value, currency) {
//   var costOfTank = 7500000;
//   if(currency === "USD") {
//     if(value >= costOfTank) {
//       return true;
//     } else {
//       return false;
//     }

//     }else if (currency === "GOLD") {
//       var usd = toUSD(value);
//       return true;
//     } else {
//       return false
//     }
//   }

// var kevinHasEnough = isThisEnoughForATank(3.5, "GOLD");
// console.log(kevinHasEnough);


 // ********************************************************************************************
                      // GLOBAL VARIABLE EXAMPLES
//*********************************************************************************************
// global variable available inside a function (local are not available outside the function)

// var globalVar = "Look, I\'m a Global!";

// sayHello();

// function  sayHello() {
//   var localVar = "Look I am local!";
// }

// alert(localVar);

// alert(globalVar);
