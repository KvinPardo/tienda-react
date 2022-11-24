import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='mx-auto container flex justify-center mt-20'>
        {greeting}
    </div>
  )
}

export default ItemListContainer