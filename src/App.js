import "./styles/App.css";

import { Link, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home.js";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";
import Footer from "./components/Footer/Footer.js";
import PostOffer from "./components/PostOffer/PostOffer.js";

const App = () => {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<PostOffer />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
