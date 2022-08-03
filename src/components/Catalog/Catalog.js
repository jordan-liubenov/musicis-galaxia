import CatalogHeader from "./CatalogHeader/CatalogHeader";
import CatalogNav from "./CatalogNav/CatalogNav";

const Catalog = () => {
  return (
    <div className="catalogContainer">
      <CatalogHeader />
      <CatalogNav />
    </div>
  );
};

export default Catalog;
