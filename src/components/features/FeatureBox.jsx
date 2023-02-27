const FeatureBox = (e) => {
	return (
		<div className="feature">
			<div className="featureLeft">
				<img src={e.image} alt="just esi" />
			</div>
			<div className="fetureRight">
				<div className="featureHeading">
					<p>{e.title}</p>
				</div>
				<div className="featurePoints">
					<ul>
						{e.points &&
							e.points.map((point, id) => {
								return <li key={id}>{point}</li>;
							})}
					</ul>
				</div>
				<div className="featureButton">
					<button>{e.buttonText}</button>
				</div>
			</div>
		</div>
	);
};

export default FeatureBox;
