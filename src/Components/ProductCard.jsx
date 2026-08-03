import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='card'>
        <img src={product.image} alt=''/>
        <h3>{product.title}</h3>
        <h4>${product.price}</h4>
        <p>{product.description}</p>
    </div>
  )
}

export default ProductCard