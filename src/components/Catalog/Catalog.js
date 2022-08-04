import { useState, useEffect } from "react";

import { collectionAnchorHandler } from "../../utils/catalogUtil";

import "../Catalog/Catalog.css";

//child component imports
import CatalogHeader from "./CatalogHeader/CatalogHeader";
import CatalogNav from "./CatalogNav/CatalogNav";
import CatalogEntries from "./CatalogEntries/CatalogEntries";
import { fetchAllOffers } from "../../services/catalogService";

const Catalog = () => {
  const [collection, setCollection] = useState("all"); //sets the type of collection to be shown to the user

  const [retrievedEntries, setRetrievedEntries] = useState([]);

  useEffect(() => {
    //fetches the entries from the DB
    fetchAllOffers().then((data) => setRetrievedEntries(data.dataArr));
  }, []);

  return (
    <>
      <CatalogHeader />
      <CatalogNav
        collectionAnchorHandler={(e) =>
          collectionAnchorHandler(e, setCollection)
        }
      />
      <div className="catalogContainer">
        <CatalogEntries retrievedEntries={retrievedEntries} />
      </div>
    </>
  );
};

export default Catalog;
