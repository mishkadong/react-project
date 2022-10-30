import "./Header.scss";
import logo from "../../img/logo.png";
import SocialMediaList from "../SocialMediaList/SocialMediaList.js";
import Nav from "../Nav/Nav.js"

function Header() {
  return (
    <header className="header">
      <a href="./" className="header__logo">
        <img src={logo} alt="logo" className="header__logo-img" />
      </a>
      <Nav />
      <SocialMediaList />
    </header>
  );
}
export default Header;
