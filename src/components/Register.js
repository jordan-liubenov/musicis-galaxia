import "../styles/Register.css";
import Footer from "./Footer";

const Register = () => {
  return (
    <div className="registerContainer">
      <div className="formDiv">
        <form method="POST">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="example@domain.com"
            name="email"
            id="email"
            required
          ></input>
          <br></br>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username123"
            name="user"
            id="user"
            required
          ></input>
          <br></br>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="******"
            name="pass"
            id="pass"
            required
          ></input>
          <br></br>
          <label htmlFor="password">Repeat Password:</label>
          <input
            type="password"
            placeholder="******"
            name="rePass"
            id="rePass"
            required
          ></input>
          <br></br>
          <button type="submit" class="submitBtn">
            Register
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
