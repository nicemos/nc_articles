import { Link } from "react-router-dom";
import "../index.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to={"/"} className="link">
          <span className="logoWrapper">
            <img
              src="../../NClogo.png"
              alt="Northcoders Logo"
              className="logoImg"
            />
            HOME
          </span>
        </Link>
        <span className="topics">
          <span>Football</span>
          <span>Cooking</span>
          <span>Coding</span>
        </span>
        <span className="signIn">
          <span>Register</span>
          <span>/</span>
          <span>Login</span>
        </span>
      </nav>
    </header>
  );
};

export default Header;
