const Card = (e) => {
	return (
		<div className="Card">
			<div className="cardImageContainer">
				<div className="cardOverlay">
					<p>{e.title}</p>
				</div>
				<img src={e.image} alt="bs esi" className="cardImage" />
			</div>
			<div className="cardContent">
				<p className="cardTitle">{e.title}</p>
				<p className="cardHeading">{e.heading}</p>
				<a href={e.link} target="_blank">{`Read More >`}</a>
			</div>
		</div>
	);
};

export default Card;
