import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";

import { useState } from "react";
import { authenticateUser } from "./services/auth";
import { AuthContext } from "./context/AuthContext";

import { useLocalStorage } from "./hooks/useLocalStorage";

import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home.js";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";
import PostOffer from "./components/PostOffer/PostOffer.js";
import UserProfile from "./components/UserProfile/UserProfile";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Catalog from "./components/Catalog/Catalog";

const App = () => {
  const navigator = useNavigate();

  const [authStatus, setAuthStatus] = useLocalStorage("authStatus", {});
  const logInUser = (auth) => {
    setAuthStatus(auth);
  };
  const logOutUser = () => {
    localStorage.clear();
    setAuthStatus({});
  };

  return (
    //authcontext wraps around all components to provide access to the auth value context
    <AuthContext.Provider value={{ authStatus, logInUser, logOutUser }}>
      <div className="App">
        <Nav />

        <Routes>
          <Route element />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<PostOffer />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/catalog" element={<Catalog />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
