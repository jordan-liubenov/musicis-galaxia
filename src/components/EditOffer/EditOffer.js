import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { fetchEntryById } from "../../services/catalogService";
import { trimIdFromEdit } from "../../utils/detailsUtils";

import "../EditOffer/EditOffer.css";

const EditOffer = () => {
  const [currentOffer, setCurrentOffer] = useState({});

  const navigator = useNavigate();

  const location = useLocation();
  const entryId = trimIdFromEdit(location); //current offer's id

  useEffect(() => {
    //fetch the current entry from the DB using its _id
    fetchEntryById(entryId).then((data) => {
      setCurrentOffer(data.entry);
    });
  }, []);

  return <h1>hi</h1>;
};

export default EditOffer;
