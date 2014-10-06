var images = ["img/thumb-0.jpg", "img/thumb-1.jpg", "img/thumb-2.jpg", "img/thumb-3.jpg"];
var currentImage = 0;

function changePhoto(whichNum) {
	var img = document.getElementById('mainPhoto');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;

function nextImage() {
	currentImage++;
	if(currentImage===images.length){
		currentImage = 0;
	}
	var img = document.getElementById('mainPhoto');
	img.setAttribute('src', images[currentImage]);
}

function backImage() {
	currentImage = currentImage - 1;
	if(currentImage=== -1){
		currentImage = 0;
	}
	var img = document.getElementById('mainPhoto');
	img.setAttribute('src', images[currentImage]);	
}