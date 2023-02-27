import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Landing from "./components/Landing/Landing";
import { useEffect } from "react";

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
		</>
	);
}

export default App;
