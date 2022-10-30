import "./SocialMediaList.scss";
import links from "../../data/social-media.json"

function SocialMediaList() {
  return (
    <ul className="contacts">
      {links.map((item, index) =>
        <li key={`uniqueId${index}`} className="contacts__social-media">
          <a href={item.href} className="contacts__social-media-link">
            <svg xmlns={item.svgXmlns} viewBox={item.svgVievBox}>
              <path d={item.svgPath} />
            </svg>
          </a>
        </li>
        )}
    </ul>
  );
}
export default SocialMediaList;
