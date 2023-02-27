import "./Landing.css";

const Landing = () => {
	return (
		<div className="Landing">
			<div className="landingLeft">
				<div className="landingLeftHeading">
					<p>Unleash Your Potential</p>
					<p>
						Join The <span>OnCampus Community</span> Today!
					</p>
				</div>
				<div className="landingLeftSubheading">
					<p>
						Take Your Developer Journey to the Next Level with OnCampus 🚀
						Connect, Collaborate, and Solve Problems Together💻
					</p>
				</div>
				<div className="landingButton">
					<button>Join Community</button>
				</div>
			</div>
			<div className="landingRight"></div>
		</div>
	);
};

export default Landing;
