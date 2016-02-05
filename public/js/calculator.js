
"use strict"

var num = ""

/**********************************************************
		First Operand/box
**********************************************************/


$(document).ready(function() {
	var selector = "#first-operand";
	$("#one").click(function(){
		num = num + "1";
		$(selector).val(num);
		console.log(num);
	});

	$("#two").click(function(){
		num = num + "2";
		$(selector).val(num);
		console.log(num);
	});

	$("#three").click(function(){
		num = num + "3";
		$(selector).val(num);
		console.log(num);
	});

	$("#four").click(function(){
		num = num + "4";
		$(selector).val(num);
		console.log(num);
	});

	$("#five").click(function(){
		num = num + "5";
		$(selector).val(num);
		console.log(num);
	});

	$("#six").click(function(){
		num = num + "6";
		$(selector).val(num);
		console.log(num);
	});

	$("#seven").click(function(){
		num = num + "7";
		$(selector).val(num);
		console.log(num);
	});

	$("#eight").click(function(){
		num = num + "8";
		$(selector).val(num);
		console.log(num);
	});

	$("#nine").click(function(){
		num = num + "9";
		$(selector).val(num);
		console.log(num);
	});

	$("#zero").click(function(){
		num = num + "0";
		$(selector).val(num);
		console.log(num);
	});


/**********************************************************
		OPERATOR BOX/CLEAR BUTTON
**********************************************************/
	
	$("#plus").click(function() {
		var operatorBox = "+";
		num = "";
		$("#operator-box").val(operatorBox);
		console.log(operatorBox);
		selector = "#second-operand";
	});

	$("#minus").click(function() {
		var operatorBox = "-";
		num = "";
		$("#operator-box").val(operatorBox);
		console.log(operatorBox);
		selector = "#second-operand";
	});

	$("#multiply").click(function() {
		var operatorBox = "*";
		num = "";
		$("#operator-box").val(operatorBox);
		console.log(operatorBox);
		selector = "#second-operand";

	});

	$("#divide").click(function() {
		var operatorBox = "/";
		num = "";
		$("#operator-box").val(operatorBox);
		console.log(operatorBox);
		selector = "#second-operand";
	});

	$("#clear").click(function(){
		 $("input").val("");
		 num = "";
		 console.log();
	
	});

	/**********************************************************
		EQUALS, SECOND OPERAND 
**********************************************************/

	$("#equals").click(function(){
		var firstNum = $("#first-operand").val();
		var secNum = $("#second-operand").val();
		var opBox = $("#operator-box").val();
		console.log(firstNum, opBox, secNum);

		if (firstNum > -1 && opBox == "+" && secNum > -1) {

			var result = console.log(parseInt(firstNum) + parseInt(secNum));
			// console.log(firstNum > -1, opBox == "+", secNum > -1);
		

		}else if (firstNum > -1 && opBox == "-" && secNum > -1) {

			var result = console.log(parseInt(firstNum) - parseInt(secNum));
			// console.log(firstNum > -1, opBox == "-", secNum > -1);

		

		}else if (firstNum > -1 && opBox == "*" && secNum > -1) {

			var result = console.log(parseInt(firstNum) * parseInt(secNum));
			// console.log(firstNum > -1, opBox == "*", secNum > -1);

		

		}else if (firstNum > -1 && opBox == "/" && secNum > -1) {

			var result = console.log(parseInt(firstNum) / parseInt(secNum));
			// console.log(firstNum > -1, opBox == "/", secNum > -1);
		}

			console.log(result);
			

	});


// CALCULATOR CODE FROM GEORGE!!!!!!!!!!!!

	// $("#equals").click(function(){
	// 	var firstOperand = $("#first-operand").val();		
	// 	console.log(firstOperand);
	// 	var secondOperand = $("#second-operand").val();
	// 	console.log(secondOperand);
	// 	var opeator = $("#operator-box").val();

	// });



})