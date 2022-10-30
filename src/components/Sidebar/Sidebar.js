import "./Sidebar.scss"
import Table from "../Table/Table.js"
import himars from "../../img/himars.jpg"

function Sidebar() {
  return (
    <aside className="sidebar">
      <figure className="sidebar__head">
        <picture className="sidebar__img">
          <img src={himars} alt="himars" />
        </picture>
        <figcaption className="sidebar__img-text">HIMARS під час навчань DEFENDER-Europe, 24 травня 2022 року</figcaption>
      </figure>
        <Table />
    </aside>
  )
}
export default Sidebar