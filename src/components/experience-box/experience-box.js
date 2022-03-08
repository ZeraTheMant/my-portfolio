import './experience-box.css'


const ExperienceBox = () => {
	return (
		<div id="experience-box" className="main-card">
			<h2>Internships and Experience</h2>
			
			<div className="flex experience-item">
				<i className="fa fa-tasks fa-lg"></i>
				<div>
					<h4>IT Programmer (PHP, JavaScript, MySQL)</h4>
					<p>
						Chunnel and Channel Realty Marketing and Development Corp. (Jan. 2021 - Present)
					</p>
				</div>
			</div>
		
			<div className="flex experience-item">
				<i className="fa fa-tasks fa-lg"></i>
				<div>
					<h4>Programming Intern (VB.Net, MySQL, SAP Crystal Reports)</h4>
					<p>
						Innovative Thinker Software Solutions (Dec. 2019 - Mar. 2020)
					</p>
				</div>
			</div>
			
			<div className="flex experience-item">
				<i className="fa fa-tasks fa-lg"></i>
				<div>
					<h4>Production Operator</h4>
					<p>
						EMI Yazaki (2016-17)
					</p>
				</div>
			</div>						
		</div>
	)
}



export default ExperienceBox;
