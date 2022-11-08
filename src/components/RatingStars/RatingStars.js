import "./RatingStars.scss"
import { useState } from "react"

function RatingStars() {
  const [value, setValue] = useState(4)
  const [onHover, setOnHover] = useState(4)


  
  return(
    <div className="rating-stars-func">
      {[...new Array(5)].map((_, index) =>
        <svg className="rating-stars-func__icon"
          key={index}
          onClick={() => setValue(index)}
          style={{
            fill: index <= ((value && onHover) || onHover) ? "gold" : "rgb(233, 233, 233)",
            // boxShadow: index <= value ? "inset 2px 2px 3px red, -1px -1px 3px red, inset -2px -2px 3px orange, 1px 1px 3px orange" : "none"
          }}
          onMouseEnter={() => setOnHover(index)}
          onMouseLeave={() => setOnHover(value)}
          // strokeWidth="0"
          viewBox="70 -120 420 800"
          height="40px"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
        </svg>
      )}
      <span className="rating-stars-func__title">Оцiнiть якiсть HIMARS</span>
    </div>
    )
}

export default RatingStars