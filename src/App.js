import "./App.css";

import { Route, Routes } from "react-router-dom";

import { useState } from "react";
import { authenticateUser } from "./services/auth";

import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home.js";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";
import PostOffer from "./components/PostOffer/PostOffer.js";
import UserProfile from "./components/UserProfile/UserProfile";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Catalog from "./components/Catalog/Catalog";

const App = () => {
  let auth = authenticateUser();
  useState(() => {
    console.log(auth);
  }, [auth]);

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route element/>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login authenticateUser={authenticateUser} />}
        />
        <Route path="/post" element={<PostOffer />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/catalog" element={<Catalog />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
