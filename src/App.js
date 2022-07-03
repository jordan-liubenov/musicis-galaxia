import "./styles/App.css";

import Nav from "./components/Nav.js";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
};

export default App;
