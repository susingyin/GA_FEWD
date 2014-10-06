var images = ["img/thumb-0.jpg", "img/thumb-1.jpg", "img/thumb-2.jpg", "img/thumb-3.jpg"];
var currentPhoto = 0;

function changePhoto(whichNum) {
	var img = document.getElementById('mainPhoto');
	img.setAttribute('src', images[whichNum]);
	currentPhoto = whichNum;

function backImage() {
	currentPhoto = currentPhoto - 1;
	if(currentPhoto=== -1){
		currentPhoto = 0;
	}
	var img = document.getElementById('mainPhoto');
	img.setAttribute('src', images[currentPhoto]);	
}

function nextImage() {
	currentPhoto++;
	if(currentPhoto===images.length){
		currentPhoto = 0;
	}
	var img = document.getElementById('mainPhoto');
	img.setAttribute('src', images[currentPhoto]);
}