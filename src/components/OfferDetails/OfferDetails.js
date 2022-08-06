import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { authenticateOwner } from "../../services/auth";
import { fetchEntryById } from "../../services/catalogService";
import { formatConditionString, trimIdFromUrl } from "../../utils/detailsUtils";
import "../OfferDetails/OfferDetails.css";

//child component imports
import OfferDeleteButton from "./OfferDeleteButton/OfferDeleteButton";
import OfferEditButton from "./OfferEditButton/OfferEditButton";

const OfferDetails = () => {
  const location = useLocation();
  const entryId = trimIdFromUrl(location); //current offer's id

  const [currentOffer, setCurrentOffer] = useState({});

  useEffect(() => {
    //fetch the current entry from the DB using its _id
    fetchEntryById(entryId).then((data) => setCurrentOffer(data.entry));
  }, []);

  return (
    <div className="detailsContainer">
      <div className="detailsDataDiv">
        <div className="detailsTitleDiv">
          <div className="detailsImgDiv">
            <img
              className="detailsImg"
              src={currentOffer.imageUrl}
              alt="The picture seems to be missing.."
              width={310}
              height={270}
            />
          </div>
          <span className="detailsTitle">{currentOffer.productName}</span>
          {currentOffer.description ? (
            <div>
              <p className="detailsParagraph">{currentOffer.description}</p>
            </div>
          ) : (
            <></>
          )}
          {currentOffer.condition ? (
            <div>
              <p className="detailsParagraph">
                {formatConditionString(currentOffer.condition)} usage.
              </p>
            </div>
          ) : (
            <></>
          )}
          {currentOffer.wattage ? (
            <div>
              <p className="detailsParagraph">
                Wattage: {currentOffer.wattage}W
              </p>
            </div>
          ) : (
            <></>
          )}
          {currentOffer.valves ? (
            <div>
              <p className="detailsParagraph">Valves: {currentOffer.valves}</p>
            </div>
          ) : (
            <></>
          )}
          <div>
            <p className="detailsParagraph">Price: {currentOffer.price}$</p>
          </div>
          {authenticateOwner(currentOffer) ? (
            <>
              <OfferEditButton entryId={entryId} />
              <OfferDeleteButton />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
