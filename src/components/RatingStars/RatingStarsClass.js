import "./RatingStarsClass.scss";
import React from "react";
import StarClass from "./StarClass";

class RatingStarClass extends React.PureComponent {
  constructor({ rate }) {
    super();
    this.state = {
      value: rate,
      hover: rate,
    };
  }

  setValue = (i) => {
    this.setState({
      ...this.state,
      value: i
    })
  }
  setHover = (i) => {
    this.setState({
      ...this.state,
      hover: i
    })
  }

  render() {
    return (
      <div className="rating-stars-class">
        {[...Array(5)].map((_, index) => (
          <StarClass 
          index={index + 1} 
          value={this.state.value} 
          setValue={this.setValue} 
          // setValue={this.setValue = (i) => {
          //   this.setState({
          //     ...this.state,
          //     value: i
          //   })
          // }} 
          hover={this.state.hover} 
          setHover={this.setHover}  
          // setHover={this.setHover = (i) => {
          //   this.setState({
          //     ...this.state,
          //     hover: i
          //   })
          // }} 
          key={`uniqueId${index}`} /> ))}
          <span className="rating-stars-class__title">Оцiнiть якiсть дiй ЗСУ</span>
      </div>
    );
  }
}

export default RatingStarClass;