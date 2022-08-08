import { useState, useEffect } from "react";

import {
  checkForEmptyCollection,
  collectionAnchorHandler,
  filterOffers,
  handleSearchBar,
} from "../../utils/catalogUtil";

import { fetchAllOffers } from "../../services/catalogService";

import "../Catalog/Catalog.css";

//child component imports
import CatalogHeader from "./CatalogHeader/CatalogHeader";
import CatalogNav from "./CatalogNav/CatalogNav";
import CatalogEntries from "./CatalogEntries/CatalogEntries";
import EmptyCatalog from "./EmptyCatalog/EmptyCatalog";
import SearchBar from "../SearchBar/SearchBar";

const Catalog = () => {
  const [collection, setCollection] = useState("all"); //state of the type of collection to be shown to the user

  const [retrievedEntries, setRetrievedEntries] = useState([]);

  useEffect(() => {
    //fetches the entries from the DB
    fetchAllOffers().then((data) => setRetrievedEntries(data.dataArr));
  }, []);

  const [searchValue, setSearchValue] = useState("");
  let filteredEntries = filterOffers(retrievedEntries, searchValue);

  return (
    <>
      <CatalogHeader />
      <CatalogNav
        collectionAnchorHandler={(e) =>
          collectionAnchorHandler(e, setCollection)
        }
      />
      <div className="catalogContainer">
        <SearchBar
          searchValue={searchValue}
          handleSearchBar={(e) => handleSearchBar(e, setSearchValue)}
        />
        {checkForEmptyCollection(retrievedEntries) ? (
          <EmptyCatalog />
        ) : (
          <CatalogEntries
            searchValue={searchValue}
            retrievedEntries={retrievedEntries}
            filteredEntries={filteredEntries}
            collection={collection}
          />
        )}
      </div>
    </>
  );
};

export default Catalog;
