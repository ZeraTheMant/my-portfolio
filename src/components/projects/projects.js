import './projects.css'
import PORTFOLIO_ITEMS from '../../portfolio-items.json'

const Project = ({ title, link, github_repo, description, image, no_github }) => {
	return (
		<div className="project">
			<div>
				<a href={link} target="_blank">
					<img src={image} alt={title} />
				</a>
			</div>
			
			<div>
				<h3><a href={link} target="_blank">{title}</a></h3>
				<p>{description}</p>
				<p>
					{ !no_github && 
						(
							<a href={github_repo} target="_blank" className="github-link">
								<i className="fa fa-external-link fa-lg"></i>
								<span>See source code on github</span>
							</a>						
						)
					}
				</p>
			</div>
		</div>
	)
}

const MultimediaProject = ({ title, description, image, setSlideshowVisible }) => {
		
	return (
		<div className="project">
			<div>
				<p className="pointer" onClick={setSlideshowVisible}>
					<img src={image} alt={title} />
				</p>
			</div>
			
			<div>
				<h3 className="pointer" onClick={setSlideshowVisible}>{title}</h3>
				<p>{description}</p>
				<p>
					<p className="pointer github-link" onClick={setSlideshowVisible}>Click here to view</p>
				</p>
			</div>
		</div>	
	)
}


const Projects = ({ openSlider }) => {

  return (
		<div id="projects" className="main-card">
			<h2>Projects</h2>
			
			<div id="projects-holder">
				<MultimediaProject
					title="Multimedia Portfolio"
					description="A collection of digital picture ads that I created while employed at Chunnel & Channel Realty Marketing & Development Corporation highlighting the skills that I've learned and the improvement in my multimedia skills."
					image="./assets/images/slider/20.jpg"
					setSlideshowVisible={openSlider}
				/>				
			
				<Project
					title="Contract Signing Video Promo ad"
					link="https://www.youtube.com/watch?v=zWkpcdQG7GM"
					description="Promotional video ad showing the contract signing of my employer with a real estate developer in Cavite. Made using Adobe Photoshop CS6 and Kdenlive."
					image="./assets/images/screen.jpg"
					no_github={true}
				/>							
			
				{ PORTFOLIO_ITEMS && PORTFOLIO_ITEMS.map((item, i) => {
						return (
							<Project
								key={i}
								title={item.title}
								link={item.link}
								github_repo={item.github_repo}
								description={item.description}
								image={item.image}
							/>
						)
					})
				}
			</div>
		</div>
  );
}

export default Projects;
