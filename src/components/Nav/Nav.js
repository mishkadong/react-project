import "./Nav.scss"
import forceList from "../../data/force-list.json"

function Nav() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {forceList.map((item, index) =>
          <li key={`uniqueId${index}`} className="header__nav-item">
            <a href={item.href} className="header__nav-item-link">
              {item.name}
            </a>
          </li>
          )}
      </ul>
    </nav>
  )
  
}

export default Nav