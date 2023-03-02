import img from "../../assets/testiBg.png";
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaGithubSquare,
	FaInstagramSquare,
} from "react-icons/fa";
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
					<div className="testiOverlay">
						<div className="overlayText">
							<p>{e.name}</p>
							<p>{e.position}</p>
						</div>
						<div className="overlaySocials">
							<div>
								<FaFacebookSquare className="facebook" />
							</div>
							<div>
								<FaTwitterSquare className="twitter" />
							</div>
							<div>
								<FaGithubSquare className="github" />
							</div>
							<div>
								<FaInstagramSquare className="insta" />
							</div>
						</div>
					</div>
					<p className="testiText">{e.testi}</p>
					<div className="testiName">
						<p>{e.name}</p>
						<p>{e.position}</p>
					</div>
					<div className="Testisocials">
						<div>
							<FaFacebookSquare />
						</div>
						<div>
							<FaTwitterSquare />
						</div>
						<div>
							<FaGithubSquare />
						</div>
						<div>
							<FaInstagramSquare />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
