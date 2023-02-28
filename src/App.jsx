import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import { useEffect } from "react";
import Features from "./components/features/Features.jsx";
import Footer from "./components/footer/Footer.jsx";
import Cards from "./components/cards/Cards.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
	distance: "200px",
	reset: false,
	duration: 1200,
	delay: 200,
	origin: "left",
});

function App() {
	useEffect(() => {
		window.addEventListener("resize", function () {
			let vh = window.innerHeight;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		});
		window.addEventListener("load", function () {
			let vh = window.innerHeight;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		});
		let vh = window.innerHeight;
		document.documentElement.style.setProperty("--vh", `${vh}px`);

		sr.reveal(".landingLeftHeading", { delay: 100 });
		sr.reveal(".landingLeft", { delay: 100 });
		sr.reveal(".Navbar", { delay: 100, origin: "top", duration: 1000 });
		sr.reveal(".landingLeftSubheading", { delay: 400 });
		sr.reveal(".landingButton", { delay: 700 });
		sr.reveal(".landingRight", { delay: 100, origin: "right" });
		sr.reveal(".feature", { delay: 100 });
		sr.reveal(".Card", { delay: 100, origin: "bottom" });
		sr.reveal(".Testimonial", { delay: 100, origin: "bottom" });
		sr.reveal(".Footer", { delay: 100, origin: "bottom" });
	}, []);
	return (
		<>
			<Navbar />
			<Landing />
			<Features />
			<Testimonial />
			<Cards />
			<Footer />
		</>
	);
}

export default App;
