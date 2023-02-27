import FeatureBox from "./FeatureBox";
import collab from "../../assets/featureCollaboration.jpg";
import netw from "../../assets/featureNetworking.jpg";
import osd from "../../assets/featureOpensource.jpg";
import pb from "../../assets/featurePbuilding.png";
import nws from "../../assets/featureNews.jpg";
import "./Features.css";

const Features = () => {
	return (
		<div className="Features">
			<FeatureBox
				title="COLLABORATION"
				buttonText="Want To Collab With Us ?"
				points={[
					"We believe that collaboration is key to the success of open sourcedevelopment.",
					"We provide a supportive and inclusive environment whereindividuals can work together",
					"Lets smake a positive impact on the world through technology.",
				]}
				image={collab}
			/>
			<FeatureBox
				title="NETWORKING"
				buttonText="Develope Your Network"
				points={[
					"Our community is made up of talented and passionate student developers from around the world.",
					"Joining OnCampus Community provides you with the opportunity to network and connect with other like-minded individuals",
					"share your experiences and knowledge",
					"build lasting relationships.",
				]}
				image={netw}
			/>
			<FeatureBox
				title="OPEN SOURCE DEVELOPEMENT"
				buttonText="Learn more about open source"
				points={[
					"We provide a wide range of opportunities for individuals of all skill levels to get involved in open source development.",
					"From simple bug fixes to complex feature development",
					"We have a project that is right for you.",
				]}
				image={osd}
			/>
			<FeatureBox
				title="PROFILE BUILDING"
				buttonText="Learn more about open source"
				points={[
					"Contributing to open source projects is a great way to build your portfolio and develop your skills",
					"Showcase your talent to potential employers.",
					"Our community provides you with the resources and support you need to succeed in open source development and build a strong profile.",
				]}
				image={pb}
			/>
			<FeatureBox
				title="TECH-NEWS"
				buttonText="Latest News Here"
				points={[
					"joining our community.",
					"We provide regular updates on the latest trends and advancements in open source development",
					"You can stay informed and on the cutting edge of technology.",
				]}
				image={nws}
			/>
		</div>
	);
};

export default Features;
