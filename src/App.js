import "./App.css";

import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home.js";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";
import Footer from "./components/Footer/Footer.js";
import PostOffer from "./components/PostOffer/PostOffer.js";
import UserProfile from "./components/UserProfile/UserProfile";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<PostOffer />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
