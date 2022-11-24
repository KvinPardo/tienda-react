import React from 'react'

const ProductCard = ({id, name, stock}) => {
  return (
    <>
      <li className='px-4 bg-blue-300 m-4'>{id}. {name} - stock: {stock}</li>     
    </>
    
  )
}

export default ProductCard