import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import { useEffect } from "react";
import Features from "./components/features/Features.jsx";
import Footer from "./components/footer/Footer.jsx";
import Cards from "./components/cards/Cards.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";

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
