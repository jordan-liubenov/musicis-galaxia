import "./styles/App.css";

import Nav from "./components/Nav.js";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Register />
      {/* <Home /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
