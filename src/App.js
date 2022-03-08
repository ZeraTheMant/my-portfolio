import React, { useState, useEffect } from 'react'
import './generic_styles.css'
import './App.css'
import Header from './components/header/header'
import AboutBox from './components/about-box/about-box'
import Projects from './components/projects/projects'
import SkillsBox from './components/skills-box/skills-box'
import EducationBox from './components/education-box/education-box'
import ExperienceBox from './components/experience-box/experience-box'
import Slider from './components/slider/slider'
import Footer from './components/footer/footer'

function App() {
	const [slideShowVisible, setSlideShowVisible] = useState(false)
	const [sliderIndex, setSliderIndex] = useState(1)

  return (
    <div className="App">
			<Header />
			
			<main>
				<div>
					<AboutBox />
					<Projects openSlider={() => setSlideShowVisible(true)} />
				</div>
				
				<div>
					<SkillsBox />
					<EducationBox />
					<ExperienceBox />
				</div>
			</main>

			{slideShowVisible && (
				<div>
					<div id="opaque-bg"></div>
					<Slider 
						closeSlider={() => setSlideShowVisible(false)}
						sliderIndex={sliderIndex}
						setSliderIndex={setSliderIndex}
					/>
				</div>
			)}
			
			<Footer />	
    </div>
  );
}

export default App;
