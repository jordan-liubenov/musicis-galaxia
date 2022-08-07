import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { AuthContext } from "./context/AuthContext";
import { CurrentOfferContext } from "./context/CurrentOfferContext";

import { useLocalStorage } from "./hooks/useLocalStorage";

import RouteGuard from "./components/Guard/RouteGuard";
import OwnerGuard from "./components/Guard/OwnerGuard";

import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home.js";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";
import PostOffer from "./components/PostOffer/PostOffer.js";
import UserProfile from "./components/UserProfile/UserProfile";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Catalog from "./components/Catalog/Catalog";
import OfferDetails from "./components/OfferDetails/OfferDetails";
import EditOffer from "./components/EditOffer/EditOffer";

const App = () => {
  const [authStatus, setAuthStatus] = useLocalStorage("authStatus", {});

  const [currentOpenOffer, setCurrentOpenOffer] = useState({});

  const logInUser = (auth) => {
    setAuthStatus(auth);
  };
  const logOutUser = () => {
    localStorage.clear();
    setAuthStatus({});
  };

  return (
    <CurrentOfferContext.Provider
      value={{ currentOpenOffer, setCurrentOpenOffer }}
    >
      <AuthContext.Provider value={{ authStatus, logInUser, logOutUser }}>
        <div className="App">
          <Nav />

          <Routes>
            <Route element={<RouteGuard />}>
              <Route path="/post" element={<PostOffer />} />
              <Route path="/profile" element={<UserProfile />} />

              <Route element={<OwnerGuard />}>
                <Route path="/edit/:id" element={<EditOffer />} />
              </Route>
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/details/:id" element={<OfferDetails />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </AuthContext.Provider>
    </CurrentOfferContext.Provider>
  );
};

export default App;
