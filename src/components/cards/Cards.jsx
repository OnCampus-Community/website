import Card from "./Card.jsx";
import img1 from "../../assets/card1.webp";
import img2 from "../../assets/card2.png";
import img3 from "../../assets/card3.png";
import img4 from "../../assets/card4.jpg";
import "./Cards.css";

const Cards = () => {
	return (
		<div className="Cards">
			<p className="cardsHeading">
				Take a <span>deeper dive</span> into a new way to work
			</p>
			<div className="cardsContainer">
				<Card
					image={img1}
					title="Flutter UI Components"
					heading="collection of different pre made Ui components."
					link="https://github.com/OnCampus-Community/Flutter-UI-Components"
				/>
				<Card
					image={img2}
					title="Python Typing Test"
					heading="made with Python, using Tkinter, a default GUI libray in python."
					link="https://github.com/OnCampus-Community/Python-Typing-Test"
				/>
				<Card
					image={img3}
					title=" Awesome-README"
					heading="List of GitHub profiles that have awesome customization"
					link="https://github.com/OnCampus-Community/Awesome-README"
				/>
				<Card
					image={img4}
					title="Diabetes-Prediction"
					heading="Diabetes Prediction using Support Vector Machine (SVM)"
					link="https://github.com/OnCampus-Community/Diabetes-Predictuion"
				/>
			</div>
		</div>
	);
};

export default Cards;
