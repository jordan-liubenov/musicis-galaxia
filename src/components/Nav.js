import "../styles/Nav.css";

import logoImg from "../img/note.png";

const Nav = (props) => {
	return (
		<header>
			<nav className="navBar">
				<ul className="links">
					<div className="logoDiv">
						<a href="/">
							<img className="logo" src={logoImg} width={60} height={60}></img>
						</a>
					</div>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/catalog">Catalog</a>
					</li>
					<li>
						<a href="/register">Register</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
					<div className="navRight">
						<li>
							<a href="/logout">Welcome [Guest], Logout</a>
						</li>
					</div>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
