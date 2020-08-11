import React from 'react'

const MoreButton = (props) => {

  const { getMoreSushi } = props

  return (
    <button onClick={getMoreSushi}>
      More sushi!
    </button>
  )
}

export default MoreButton