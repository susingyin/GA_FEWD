// Red or Stop Light
function stopClick (){
  var goLight = document.getElementById('goLight');
  var cautionLight = document.getElementById('cautionLight');
  
  goLight.style.backgroundColor = "black";
  cautionLight.style.backgroundColor = "black";
  
  var light = document.getElementById('stopLight');
  light.style.backgroundColor = "red";
}

// Yellow or Caution Light
function cautionClick (){
  var goLight = document.getElementById('goLight');
  var stopLight = document.getElementById('stopLight');
  
  goLight.style.backgroundColor = "black";
  stopLight.style.backgroundColor = "black";
  
  var light = document.getElementById('cautionLight');
  light.style.backgroundColor = "yellow";
}

// Green or Go Light
function goClick (){
  var cautionLight = document.getElementById('cautionLight');
  var stopLight = document.getElementById('stopLight');
  
  cautionLight.style.backgroundColor = "black";
  stopLight.style.backgroundColor = "black";
  
  var light = document.getElementById('goLight');
  light.style.backgroundColor = "green";
}



// Works perfectly and looks great. Good job!
// Consider breaking the functions up by repeatable actions. The turn light on code below could be used again for another traffic light with different colors. Because you're hardcoding the values above, you can only use this code for this specific traffic light. It's less flexible.  

// function buttonClick(lightToTurnOn){
//  turnLightsOff();
//  turnLightOn(lightToTurnOn);
// }

// function turnLightsOff(){
//  var greenLight = document.getElementById('green');
//  var yellowLight = document.getElementById('yellow');
//  var redLight = document.getElementById('red');

//  greenLight.style.backgroundColor = "black";
//  yellowLight.style.backgroundColor = "black";
//  redLight.style.backgroundColor = "black";
// }

// function turnLightOn(lightToTurnOn){
//  var whichLight = document.getElementById(lightToTurnOn);
//  whichLight.style.backgroundColor = lightToTurnOn;
// }
