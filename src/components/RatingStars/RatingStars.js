import "./RatingStars.scss"
import Star from "./Star"
import { useState } from "react"


const RatingStars = ({ rate }) => {
  const [value, setValue] = useState(rate)
  const [hover, setHover] = useState(rate)

  return(
    <div className="rating-stars-func">
      {[...Array(5)].map((_, index) =>
      <Star index={index + 1} hover={hover} setHover={setHover} setValue={setValue} value={value} key={`uniqueId${index}`}>
        
      </Star>
      )}
      <span className="rating-stars-func__title">Оцiнiть якiсть HIMARS</span>
    </div>
    )
}

export default RatingStars