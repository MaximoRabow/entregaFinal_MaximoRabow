import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='contgreet'>
      <div id='greet'>
        {greeting}
      </div>
    </div>
  
  )
}

export default ItemListContainer