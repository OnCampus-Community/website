import "./Testimonial.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../../assets/card1.png";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
	return (
		<div className="Testimonial">
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				showArrows={false}
				showThumbs={false}
				swipeable={true}
				showStatus={false}
				interval={3000}
			>
				<TestimonialCard
					testi="We were able to create a large virtual network of employees that can
						communicate as though they are together. There was a lot of
						disruption in terms of where we worked, but in terms of how we
						worked—very little disruption."
					name="Mark Smith"
					position="Senior Technical Product Manager, T-Mobile"
					image={img}
				/>
				<TestimonialCard
					testi="We were able to create a large virtual network of employees that can
						communicate as though they are together. There was a lot of
						disruption in terms of where we worked, but in terms of how we
						worked—very little disruption."
					name="Mark Smith"
					position="Senior Technical Product Manager, T-Mobile"
					image={img}
				/>
				<TestimonialCard
					testi="We were able to create a large virtual network of employees that can
						communicate as though they are together. There was a lot of
						disruption in terms of where we worked, but in terms of how we
						worked—very little disruption."
					name="Mark Smith"
					position="Senior Technical Product Manager, T-Mobile"
					image={img}
				/>
			</Carousel>
		</div>
	);
};

export default Testimonial;
