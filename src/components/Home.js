import "../styles/Home.css";

import { useState } from "react";

const Home = (props) => {
	const [underscore, setUnderscore] = useState(false);

	setTimeout(() => {
		if (underscore) {
			setUnderscore(false);
		} else {
			setUnderscore(true);
		}
	}, 800);

	return (
		<div className="homeContainer">
			<h3 className="welcome">Welcome to...</h3>
			<div className="title">
				{underscore ? (
					<h1 className="titleH1">Musicis Galaxia</h1>
				) : (
					<h1 className="titleH1">Musicis Galaxia_</h1>
				)}
			</div>
		</div>
	);
};

export default Home;
