import "./Footer.scss";
import SocialMediaList from "../SocialMediaList/SocialMediaList.js";

function Footer() {
  return (
    <footer className="footer">

      <SocialMediaList />
      <span className="footer__copyright">copyright 2022</span>
      <span className="footer__date">
        {Date()}
      </span>
    </footer>
  )
}

export default Footer;
