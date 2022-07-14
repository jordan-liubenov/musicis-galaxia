import "../Home/Home.css";

import { useState } from "react";
import { displayUnderscore } from "../../utils/homeUtil";

import Footer from "../Footer/Footer";
import InstructMsg from "./InstructMsg";

const Home = () => {
  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);
  let title = underscore ? "Music Galaxia_" : "Music Galaxia";

  return (
    <div className="homeContainer">
      <div className="title">
        <span className="titleSpan">{title}</span>
      </div>
      <div className="welcomeMsg">
        <p>
          Welcome to Musicis Galaxia, an online marketplace<br></br>
          where everyone is free to post and browse different<br></br>
          offers on instruments and musical accessories.
        </p>
      </div>
      <div className="instructContainer">
        <InstructMsg />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
