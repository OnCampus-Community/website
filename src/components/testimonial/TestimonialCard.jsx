import img from "../../assets/testiBg.png";
const TestimonialCard = (e) => {
	return (
		<div className="testimonialContainer">
			<div className="testimonialCard">
				<div className="testimonialLeft">
					<img src={img} alt="bss esi" className="testiDeco" />
					<div className="testiImageHolder">
						<img src={e.image} alt="hahha" />
					</div>
				</div>
				<div className="testimonialRight">
					<p className="testiText">{e.testi}</p>
					<div className="testiName">
						<p>{e.name}</p>
						<p>{e.position}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
