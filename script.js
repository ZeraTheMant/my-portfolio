const dots = document.getElementsByClassName("dot");	
const slides = document.getElementsByClassName("mySlides");

var slideIndex = 0;
showSlides(slideIndex);
arrangeDots(slideIndex)

function resetDots() {
  for (let i=0; i<5; i++) {
		dots[i].onclick = function() {
			const x = slideIndex+i
			alert(x)
		}
  }	  
}

function arrangeDots(n) {
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }	
	
  dots[n].className += " active";  	 
}

// Next/previous controls
function changeSlide(n) {
  slideIndex += n
  
  if (slideIndex < 0)
		slideIndex = 24
  
  if (slideIndex > 24)
		slideIndex = 0  
  
  showSlides(slideIndex);
  arrangeDots(slideIndex)
  changeDotGroup(n)  
  changeBgHeight()
}

function changeDotGroup(direction) {
	const currentSlide = dots[slideIndex]
	let previousSlide = dots[slideIndex-direction]
	if (!previousSlide)
		previousSlide = dots[0]
	console.log(currentSlide, previousSlide)	
	
	if (currentSlide.name != previousSlide.name) {
		hideDotGroups(currentSlide.name)			
		showDotGroup(currentSlide.name)
	}
}

// Thumbnail image controls
function goToSlide(n) {
	const oldSlide = slideIndex
  slideIndex = n
  showSlides(slideIndex);
  arrangeDots(slideIndex)
  changeDotGroup(slideIndex-oldSlide)
  changeBgHeight()   
}

function showSlides(n) {  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  } 
  
  slides[n].style.display = "block";  
}

function show_slideshow() {
	opaque_bg.classList.remove("hidden")
	slideshowOuterWrapper.classList.remove('hidden')
}

function close_slideShow() {
	opaque_bg.classList.add("hidden")
	slideshowOuterWrapper.classList.add('hidden')	
	goToSlide(1)	
}

function changeBgHeight() {
	//opaque_bg.style.height = document.querySelector('body').scrollHeight + 'px';
	//console.log(document.querySelector('body').scrollHeight, document.querySelector('body').offsetHeight)
}


const opaque_bg = document.querySelector("#opaque-bg")
const slideshowOuterWrapper = document.querySelector('#slideshow-outer-wrapper')

const closeBtn = document.querySelector('#close-button')
closeBtn.addEventListener('click', close_slideShow)
