import "../styles/Home.css";

import { useState } from "react";
import { displayUnderscore } from "../utils/homeUtil";
import Footer from "./Footer";

const Home = () => {
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
        <p>
          Welcome to Musicis Galaxia, an online marketplace<br></br>
          where everyone is free to post and browse different<br></br>
          offers on instruments and musical accessories.
        </p>
      </div>
      <div className="instructContainer">
        <div className="instructMsg">
          <p>
            To get started, simply open the{" "}
            <a className="catalogRef" href="/catalog">
              Catalog
            </a>{" "}
            to browse<br></br>
            all posts and see if anything catches your eye.<br></br>
            <br></br>
            Alternatively, if you'd like to create a new offer and sell
            <br></br>
            one of your pieces of gear, create a free account{" "}
            <a className="catalogRef" href="/register">
              Here
            </a>
            , and <br></br>
            share your offer with the rest of the users.
            <br></br>
          </p>
          <br></br>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
