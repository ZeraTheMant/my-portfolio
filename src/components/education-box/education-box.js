import './education-box.css'


const EducationBox = () => {
	return (
		<div id="education-box" className="main-card">
			<h2>Education</h2>
			
			<div className="flex education-item">
				<i className="fa fa-graduation-cap fa-lg"></i>
				<div>
					<h4>BSc in Information Technology</h4>
					<p>
						STI College Dasmarinas (2013-15, 2018-20)
					</p>
				</div>
			</div>
		
			<div className="flex education-item">
				<i className="fa fa-graduation-cap fa-lg"></i>
				<div>
					<h4>
						Certificate in Manufacturing Technology</h4>
					<p>
						National College of Science and Technology Institute of Industrial Research and Training (2016-17)
					</p>
				</div>
			</div>			
		</div>
	)
}



export default EducationBox;
