import React, { Fragment } from 'react'
import SushiWallet from '../components/SushiWallet'

const Table = (props) => {

  const { balance, sushiAte, addBalance } = props

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}></div>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${balance} remaining!
      </h1>  
      <div className="table">
        <div style={{margin: '0 auto', width: '50%'}}>
          <SushiWallet addBalance={addBalance}/>
        </div>
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(sushiAte)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table