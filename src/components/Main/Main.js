import "./Main.scss"
import info from "../../data/main-info.json"

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">HIMARS</h1>
      {info.map((item, index) =>
        <article key={`uniqueId${index}`} className="main__block">
          <h2 className="main__block-title">{item.title}</h2>
          <p className="main__block-content">{item.value}</p>
        </article>
        )}
    </main>
  )
}
export default Main