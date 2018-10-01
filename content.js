// Deciding where to put the fakespotbox 
var fakeSpotChar = $('#detail-ilm_div');

//Creating a random number from A to F 
var myArray = [ "A", "B", "C", "D", "F"];
var randomChar = myArray[Math.floor(Math.random()* myArray.length)];

// Creating new div section and adding the value with box to a Amazon section
var fakeSpotDiv = $("<div id='fakespot-grade-box'>" +  randomChar  + "</div>")
fakeSpotChar.append(fakeSpotDiv);
	

