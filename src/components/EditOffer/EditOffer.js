import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchEntryById } from "../../services/catalogService";
import { trimIdFromUrl } from "../../utils/detailsUtils";
import { checkIfOwner } from "../../utils/editUtil";
import "../EditOffer/EditOffer.css";

const EditOffer = () => {
  const navigator = useNavigate();

  const location = useLocation();
  const entryId = trimIdFromUrl(location); //current offer's id

  const [currentOffer, setCurrentOffer] = useState({});

  useEffect(() => {
    //fetch the current entry from the DB using its _id
    fetchEntryById(entryId).then((data) => setCurrentOffer(data.entry));

    //if current user trying to access the Edit view isn't owner, redirect to 404
    checkIfOwner(currentOffer, navigator);
  }, []);

  return <h1>hi</h1>;
};

export default EditOffer;
