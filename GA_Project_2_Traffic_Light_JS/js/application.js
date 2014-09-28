function stopClick (){
  var goLight = document.getElementById('goLight');
  var cautionLight = document.getElementById('cautionLight');
  
  goLight.style.backgroundColor = "black";
  cautionLight.style.backgroundColor = "black";
  
  var light = document.getElementById('stopLight');
  light.style.backgroundColor = "red";
}

function cautionClick (){
  var goLight = document.getElementById('goLight');
  var stopLight = document.getElementById('stopLight');
  
  goLight.style.backgroundColor = "black";
  stopLight.style.backgroundColor = "black";
  
  var light = document.getElementById('cautionLight');
  light.style.backgroundColor = "yellow";
}

function goClick (){
  var cautionLight = document.getElementById('cautionLight');
  var stopLight = document.getElementById('stopLight');
  
  cautionLight.style.backgroundColor = "black";
  stopLight.style.backgroundColor = "black";
  
  var light = document.getElementById('goLight');
  light.style.backgroundColor = "green";
}