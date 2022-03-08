import './header.css'
//import reubenImage from '../../assets/images/my_picture.jpg'

const Header = () => {
  return (
		<header>
			<div id="reuben-img-container">
				<img src="./assets/images/my_picture.jpg" id="reuben-img" alt="Reuben image" />
			</div>
			
			<div id="reuben-info">
				<div>
					<h1>Reuben Daniel E. Domondon</h1>
					<p className="grey" id="reuben-title">Junior Developer</p>
					
					<div id="icons-container">
						<a href="https://github.com/zerathemant" target="_blank">
							<div className="icon">
								<i className="fa fa-github"></i>
							</div>
						</a>
						
						<a href="https://www.linkedin.com/in/reuben-domondon-83a6381bb/" target="_blank">
							<div className="icon">
								<i className="fa fa-linkedin"></i>
							</div>
						</a>				
						
						<a href="https://www.facebook.com/coldheartedfury" target="_blank">
							<div className="icon">
								<i className="fa fa-facebook"></i>
							</div>
						</a>	
						
						<a href="https://www.youtube.com/user/sup3rkangkong/" target="_blank">
							<div className="icon">
								<i className="fa fa-youtube"></i>
							</div>
						</a>													
					</div>
				</div>
			</div>
			
			<div id="other-info-section">
				<div id="other-info-container">
					<div className="other-info">
						<i className="fa fa-birthday-cake grey"></i>
						<span>November 24, 1995</span>				
					</div>
					
					<div className="other-info">
						<i className="fa fa-map-marker grey"></i>
						<span>Dasmariñas, Cavite, Philippines</span>				
					</div>	
					
					<div className="other-info">
						<i className="fa fa-envelope grey"></i>
						<span>reuben.domondon@gmail.com</span>				
					</div>			
					
					<div className="other-info">
						<i className="fa fa-mobile grey"></i>
						<span>(0995) 826-9193</span>				
					</div>							
				</div>			
			</div>
		</header>
  );
}

export default Header;
