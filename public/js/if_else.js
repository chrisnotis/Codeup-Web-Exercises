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

do {
	var num = Math.floor((Math.random()*50)+1)
} while (num % 2 ==0) {
	console.log("random odd: " +num)
};

for (num = 1 ; num <= 50 ; num++) {
	if(num % 2 !==0) {
		console.log("ha ha odd: " +num);
	}
}

 // ********************************************************************************************
                      //   TERNARY EXAMPLES
//*********************************************************************************************

// (color==="red")?console.log("red"):console.log("not red");

// isYellow = (color==="yellow")?true:false;

