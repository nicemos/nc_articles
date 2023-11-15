import { Link } from "react-router-dom";
import "../index.css";
import { getArticles } from "../data/api";
import { useContext } from "react";
import { ArticlesContext } from "./ArticlesContext";
const Header = () => {
  const {setArticles} = useContext(ArticlesContext);
  const handleMenuItemClick = async (e) => {
    let value = e.target.innerText.toLowerCase();
    if(value === 'all') value = '';
    const {articles} = await getArticles({topic:value});
    setArticles(articles);
  }
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
          <span onClick={handleMenuItemClick}>All</span>
          <span onClick={handleMenuItemClick}>Football</span>
          <span onClick={handleMenuItemClick}>Cooking</span>
          <span onClick={handleMenuItemClick}>Coding</span>
        </span>
        <span className="signIn">
          <span className="register">Register</span>
          <span>/</span>
          <span className="login">Login</span>
        </span>
      </nav>
    </header>
  );
};

export default Header;
