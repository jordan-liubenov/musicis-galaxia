import "./styles/App.css";

import Nav from "./components/Nav.js";
import Home from "./components/Home";
import Register from "./components/Register";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Register />
      {/* <Home /> */}
    </div>
  );
};

export default App;
