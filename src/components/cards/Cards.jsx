import Card from "./Card";
import img1 from "../../assets/card1.png";
import img2 from "../../assets/card2.png";
import img3 from "../../assets/card3.png";
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
					title="Resource"
					heading="See how others are growing in our Discord server"
					link=""
				/>
				<Card
					image={img2}
					title="Webinar"
					heading="Keep an eye on us through twitter"
					link=""
				/>
				<Card
					image={img3}
					title="E-Book"
					heading="Reinventing work: New imperatives for the future of work"
					link=""
				/>
				<Card
					image={img3}
					title="Resource"
					heading="See how others are growing in our Discord server"
					link=""
				/>
			</div>
		</div>
	);
};

export default Cards;
