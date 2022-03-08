import './skills-box.css'

const Skill = ({ language, level, subtext }) => {
	return (
		<div className="skill">
		
			<div className="flex skill-title">
				<h3>{language}</h3>
				<p className="expertise-subtext">
					<i className="fa fa-info-circle"></i>&nbsp;
					<span>{subtext}</span>
				</p>
			</div>
			
			<div className="bar-bg">
				<div 
					className="bar-inner"
					style={{
						width: `${level * 10}%`
					}}
				>
				</div>
			</div>
		</div>
	)
}

const SkillsBox = () => {
	return (
		<div id="skills-box" className="main-card">
			<h2>Skills</h2>
			<p>
				Below is a list detailing my knowledge and expertise of a particular programming language.			
			</p>
			
			<div id="skills-container">
				<Skill
					language="Python"
					level={9}
					subtext="Experienced"
				/>
				
				<Skill
					language="Javascript"
					level={9}
					subtext="Experienced"
				/>	
				
				<Skill
					language="HTML & CSS"
					level={9}
					subtext="Experienced"
				/>	
				
				<Skill
					language="PHP"
					level={7}
					subtext="Novice"
				/>	
				
				<Skill
					language="VB.Net"
					level={5}
					subtext="Average"
				/>															
			</div>
		</div>
	)
}



export default SkillsBox;
