// import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.png";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="Footer">
			<p>OnCampus Community</p>
			<div className="footerSocials">
				<a href="">
					<img src={twitter} alt="social" className="footerSocial" />
				</a>
				{/* <a href="">
					<img src={facebook} alt="social" className="footerSocial" />
				</a> */}
				<a href="">
					<img src={instagram} alt="social" className="footerSocial" />
				</a>
				<a href="">
					<img src={linkedin} alt="social" className="footerSocial" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
