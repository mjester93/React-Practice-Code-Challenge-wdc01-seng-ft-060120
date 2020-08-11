import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const { sushis, eatSushi, startSushiNumber, endSushiNumber, getMoreSushi } = props

  return (
    <Fragment>
      <div className="belt">
        {
          sushis.slice(startSushiNumber, endSushiNumber).map(sushi => {
            return (
              <Sushi 
                key={sushi.id} 
                sushi={sushi} 
                eatSushi={eatSushi} />
            )
          })
        }
        <MoreButton getMoreSushi={getMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer