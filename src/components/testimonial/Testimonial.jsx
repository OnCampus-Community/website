import "./Testimonial.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import deep from "../../assets/deepraj.jpeg";
import deb from "../../assets/deb.jpg";
import utk from "../../assets/utkarsh.jpg";
import vaib from "../../assets/vaibhav.jpg";
import raghav from "../../assets/raghav.png";
import anshulRaj from "../../assets/anshulRaj.jpg";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
	return (
		<div className="Testimonial">
			<Carousel
				autoPlay={false}
				infiniteLoop={true}
				showArrows={true}
				showThumbs={false}
				swipeable={false}
				showStatus={false}
				interval={3000}
			>
				<TestimonialCard
					testi="OnCampus Community concentrates on the areas that colleges typically overlook. We are a fantastic student-led community that places a strong emphasis on its members' total skill development."
					name="Deepraj Baidya"
					position="Flutter Intern @KaizenLabs, Open-Source Contributor, ex- INeuron Campus Tech Lead."
					image={deep}
				/>
				<TestimonialCard
					testi="Hey there, I'm Debarghya, a computer science graduate with a passion for technology. 
					I'm always on the lookout for new challenges to help me continue growing and expanding my skills as a developer. I'm driven by my passion for technology and my desire to learn and improve.
					I'm excited to explore new opportunities to make an impact in the field and to contribute to projects that inspire me."
					name="Debarghya Chanda"
					position="Campus Ambassador-HackerEarth ,Open-Source Contributor, Student"
					image={deb}
				/>
				<TestimonialCard
					testi="I'm happy to share my experience with oncampus, a welcoming community of tech enthusiasts and open source advocates. As a member, I've connected with like-minded individuals, learned new skills, and contributed to open source.
					Whether you are a beginner or an experienced professional, there is always something to learn and someone to connect with."
					name="Vaibhav Aswal"
					position="student, Open-Source Contributor"
					image={vaib}
				/>
				<TestimonialCard
					testi="Hi, I am utkarsh, pursuing my goals while being a computer science graduate. 
					I love to explore new things that can indulge me into some seriousness. Building and creating new purposes makes me feel excited. 
					I am here at oncampus to make things happen seemlessly. 
					Hoping to learn and earn new projects."
					name="Utkarsh Singh"
					position="Open-Source Contributor, Student"
					image={utk}
				/>
				<TestimonialCard
					testi="My name is Raghav and I'm a computer science engineer.
					I have knowledge in Java and Cloud technology as well as
					i excell in public speaking and public relations. I'm very proud to be a part of the OnCampus community, 
					which is a group of like-minded individuals 
					who share a passion for technology and innovation."
					name="Raghav Dixit"
					position="I am currently serving as the HR for OnCampus community."
					image={raghav}
				/>
				<TestimonialCard
					testi="I am Anshul Raj and delighted to introduce myself as a B.Tech student who is not only pursuing his academic goals but is also working hard towards achieving his personal and professional aspirations.
					However, my ambitions go beyond academics. I have set several goals, including gaining work experience in chosen field, developing leadership skills, and contributing to the community."
					name="Anshul Raj"
					position="-"
					image={anshulRaj}
				/>
			</Carousel>
		</div>
	);
};

export default Testimonial;
