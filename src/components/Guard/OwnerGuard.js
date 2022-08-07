import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { CurrentOfferContext } from "../../context/CurrentOfferContext";

//used for preventing non-owners from accessing the "Edit" page for offers in the Catalog
const OwnerGuard = () => {
  const { currentOpenOffer } = useContext(CurrentOfferContext);
  const currentUserId = JSON.parse(localStorage.getItem("authStatus")).id;

  const isOwner = currentOpenOffer.ownerId == currentUserId;

  return isOwner ? <Outlet /> : <Navigate to={"/404"} />;
};

export default OwnerGuard;
