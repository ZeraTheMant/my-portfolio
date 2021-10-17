const TOTAL = 25
const slideshowContainer = document.querySelector('.slideshow-container')

function create_slide(n) {
	const slide = document.createElement('div')
	slide.classList.add("mySlides", "fade")
	
	const numberText = document.createElement('div')
	numberText.classList.add("numbertext")
	numberText.textContent = `${n} / ${TOTAL}`
	slide.appendChild(numberText)
	
	const img = document.createElement('img')
	img.src = `./images/slider/${n}.jpg`
	//img.style.width = '100%'
	slide.appendChild(img)
	
	return slide
}

function generateSlides() {
	for (let i=1; i<=TOTAL; i++) {
		slideshowContainer.appendChild(create_slide(i))
	}	
}

function create_dot(i, group) {
	const span = document.createElement('span')
	const dotGroup = `dot-group-${group}`
	span.classList.add('dot', 'hidden', dotGroup)
	span.name = dotGroup
	span.addEventListener('click', () => {
		goToSlide(i)
	})
	return span
}

function generateDots() {
	let group = 1	
	for (let i=1; i<=TOTAL; i++) {	
		dotContainer.appendChild(create_dot(i-1, group))	
		if (i % 5 === 0)
			group += 1		
	}		
}

function showDotGroup(group) {
	const dots = document.querySelectorAll(`span.dot.${group}`)
	dots.forEach(dot => dot.classList.remove('hidden'))
}

function hideDotGroups(group) {
	const dots = document.querySelectorAll(`span.dot:not(.${group})`)	
	dots.forEach(dot => dot.classList.add('hidden'))	
}

const dotContainer = document.querySelector('#dot-container')
generateSlides()
generateDots()
showDotGroup('dot-group-1')
