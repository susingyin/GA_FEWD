//var stuff = ["apples", "oranges", "potatoes"];

//function saySomething() {
//	console.log("hey there");
//}

//$.each(stuff, function(index, value){
//});

//For each item in this array, I want you to complete a task.  The 2nd argument is a function.  The function is inside the argument.  This function is called an Anonymous Function.





var fruit = "apple";

function init() {
	alert($('#food').val());					//In JavaScript, this is: document.getElementById(food).test = fruit;
};

$( document ).ready(function(){
	displayVals();

});

function displayVals() {
  var singleValues = $( "#single" ).val();

  var multipleValues = $( "#multiple" ).val() || [];
  
  $( "p" ).html(singleValues);
}
 

