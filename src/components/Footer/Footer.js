import "./Footer.scss";
import SocialMediaList from "../SocialMediaList/SocialMediaList.js";
import RatingStarClass from "../RatingStars/RatingStarsClass";
import RatingStars from "../RatingStars/RatingStars";

function Footer() {
  return (
    <footer className="footer">

      <SocialMediaList />
      <RatingStars  rate={5} />
      <RatingStarClass  rate={5} />
      <span className="footer__copyright">copyright 2022</span>
      <span className="footer__date">
        {Date()}
      </span>
    </footer>
  )
}

export default Footer;
