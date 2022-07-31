import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { displayUnderscore, redirectHome } from "../../utils/homeUtil";

import "../ErrorPage/ErrorPage.css";

const ErrorPage = () => {
  const navigator = useNavigate();

  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);
  let title = underscore ? "404_" : "404";

  return (
    <div className="errContainer">
      <div className="regTitleDiv">
        <span className="regTitleSpan">{title}</span>
      </div>
      <div className="errorMessage">
        <div>
          {" "}
          <p>
            There seems to have been trouble processing your request..<br></br>
            Go back Home:
          </p>
        </div>
      </div>
      <div className="redirectHomeBtn">
        {" "}
        <button
          className="homeRedirect"
          onClick={() => redirectHome(navigator)}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
