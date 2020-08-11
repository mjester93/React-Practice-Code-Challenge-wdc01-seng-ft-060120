import React from 'react'

const Sushi = (props) => {

  const { img_url, isAte, name, price } = props.sushi
  const { sushi, eatSushi } = props

  return (
    <div className="sushi">
      <div className="plate" 
        onClick={() => {eatSushi(sushi)}}
      >
        {isAte ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi