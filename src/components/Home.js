import "../styles/Home.css";

import { useState } from "react";
import { displayUnderscore } from "../utils/homeUtil";

const Home = (props) => {
	const [underscore, setUnderscore] = useState(false);

	displayUnderscore(underscore, setUnderscore);

	return (
		<div className="homeContainer">
			<div className="title">
				{underscore ? (
					<span className="titleSpan">Musicis Galaxia</span>
				) : (
					<span className="titleSpan">Musicis Galaxia_</span>
				)}
			</div>
			<div className="welcomeMsg">
				<p className="">
					Welcome to Musicis Galaxia, an online marketplace<br></br>
					where everyone is free to post and browse different<br></br>
					offers on instruments and musical accessories.
				</p>
			</div>
		</div>
	);
};

export default Home;
