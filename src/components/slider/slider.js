import React from 'react';
import './slider.css'
import SLIDER_ITEMS from '../../slider-items.json'
const MIN_SLIDE = 1
const MAX_SLIDE = SLIDER_ITEMS.length

const SliderItem = ({ displayClass, numberText, imageLink }) => {
	return (
		<div className={["mySlides", "fade", displayClass].join(" ")}>
			<div className="numberText">{numberText}</div>
			<img src={imageLink} />
		</div>
	)
}

const Slider = ({ closeSlider, sliderIndex, setSliderIndex }) => {
	const moveSlider = (slide) => {
		if (slide > MAX_SLIDE) setSliderIndex(MIN_SLIDE)
		else if (slide < MIN_SLIDE) setSliderIndex(MAX_SLIDE)
		else setSliderIndex(slide)
	}
	
	return (
		<div id="slideshow-outer-wrapper">
			<div>	
				<div id="close-button" onClick={closeSlider}>&#10060;</div>		
				<div className="slideshow-container">

					<div id="arrows-container">
						<a className="prev" onClick={() => moveSlider(sliderIndex - 1)}>&#10094;</a>
						<a className="next" onClick={() => moveSlider(sliderIndex + 1)}>&#10095;</a>
					</div>
					
				 { SLIDER_ITEMS && SLIDER_ITEMS.map((item, i) => {
						return (
							<SliderItem
								key={i+1}
								displayClass={sliderIndex == i+1 ? "active-slide" : "hidden"}
								numberText={`${i+1} / ${SLIDER_ITEMS.length}`}
								imageLink={item.image}
							/>
						)
					})
				}					 
					
				</div>
				<br />

				<div className="relative">
					<div id="dot-container"></div>
				</div>
			</div>
		</div>	
	)
}

export default Slider
