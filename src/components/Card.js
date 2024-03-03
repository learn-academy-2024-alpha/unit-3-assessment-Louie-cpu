import React from "react"

const Card = (props) => {
  return (
    <div className="handStyles">
      {props.hand.map((card, index) => {
        return (
          <div className="cardStyles" key={index}>
            {card}
          </div>
        )
      })}
    </div>
  )
}
export default Card