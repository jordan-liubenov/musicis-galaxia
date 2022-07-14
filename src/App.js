import "./styles/App.css";

import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="App">
      <main>
        <Nav />
        {/* <Home /> */}
        <Register />
        {/* <Login /> */}
      </main>
    </div>
  );
};

export default App;
