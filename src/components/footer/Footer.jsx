// import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="Footer">
			<p>OnCampus Community</p>
			<div className="footerSocials">
				{/* dont remove this link copywrite reasons  */}
				{/* ican downloaded from <a href="https://www.flaticon.com/free-icons/discord" title="discord icons">Discord icons created by Hight Quality Icons - Flaticon</a> */}
				<a href="https://discord.gg/j392pfNp" target="_blank">
					<img src={discord} alt="social" className="footerSocial" />
				</a>
				<a href="">
					<img src={twitter} alt="social" className="footerSocial" />
				</a>
				<a href="https://www.instagram.com/oncampus_official/" target="_blank">
					<img src={instagram} alt="social" className="footerSocial" />
				</a>
				<a
					href="https://www.linkedin.com/company/rightoncampus/"
					target="_blank"
				>
					<img src={linkedin} alt="social" className="footerSocial" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
