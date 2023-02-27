import oncampus from "../../assets/onCampusLogo.png";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="navLogo">
				<img src={oncampus} alt="logo" />
				<p>OnCampus</p>
			</div>
		</div>
	);
};

export default Navbar;
