import React from 'react'
import { useCart } from '../context/CartContext'

const ProductCard = ({product}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const validatedProduct = {
      ...product,
      id: product.id || Date.now(),
      price: parseFloat(product.price) || 0,
      title: product.title || 'Product',
      image: product.image || '',
      description: product.description || ''
    };
    addToCart(validatedProduct);
  };

  const price = parseFloat(product.price) || 0;

  return (
    <div className='card'>
        <img src={product.image || ''} alt={product.title || 'Product'} onError={(e) => {e.target.src = 'https://via.placeholder.com/180?text=No+Image'}}/>
        <h3>{product.title || 'Product'}</h3>
        <h4>${price.toFixed(2)}</h4>
        <p>{product.description || ''}</p>
        <button className='add-to-cart-btn' onClick={handleAddToCart}>
            Add to Cart
        </button>
    </div>
  )
}

export default ProductCard