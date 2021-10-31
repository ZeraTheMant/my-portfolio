const dots = document.getElementsByClassName("dot");	
const slides = document.getElementsByClassName("mySlides");
const img = document.querySelectorAll(".mySlides img");
const prev = document.querySelector('.prev')
const opaque_bg = document.querySelector("#opaque-bg")
const arrows_container = document.querySelector('#arrows-container')

var slideIndex = 0;
showSlides(slideIndex);
arrangeDots(slideIndex)

function resetDots() {
  for (let i=0; i<5; i++) {
		dots[i].onclick = function() {
			const x = slideIndex+i
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
		slideIndex = 27
  
  if (slideIndex > 27)
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
  
  slides[n].style.display = "flex";  
  slides[n].style.justifyContent = "center"; 
  const x = img[n].getBoundingClientRect()
  console.log(img[n].offsetWidth)  
  //prev.style.left = x.left + 'px'
   
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



const slideshowOuterWrapper = document.querySelector('#slideshow-outer-wrapper')

const closeBtn = document.querySelector('#close-button')
closeBtn.addEventListener('click', close_slideShow)
