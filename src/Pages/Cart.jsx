import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import './Cart.css'

const Cart = () => {
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();
  const [expandedItems, setExpandedItems] = useState({});

  const subtotal = parseFloat(totalPrice) || 0;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const finalTotal = subtotal + shipping + tax;

  const toggleExpand = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (quantity > 0) {
      updateQuantity(itemId, quantity);
    }
  };

  if (cart.length === 0) {
    return (
      <div className='cart-empty'>
        <h1>Your Cart is Empty</h1>
        <p>Add some products to your cart to see them here!</p>
      </div>
    )
  }

  return (
    <div className='cart-container'>
      <h1>Shopping Cart ({totalItems} items)</h1>
      
      <div className='cart-content'>
        <div className='cart-items'>
          {cart.map(item => {
            const itemPrice = parseFloat(item.price) || 0;
            const itemTotal = itemPrice * (item.quantity || 1);
            const isExpanded = expandedItems[item.id];
            return (
              <div key={item.id} className='cart-item'>
                <div className='cart-item-main'>
                  <img src={item.image || ''} alt={item.title || 'Product'} className='cart-item-image' onError={(e) => {e.target.src = 'https://via.placeholder.com/120?text=No+Image'}}/>
                  <div className='cart-item-details'>
                    <h3>{item.title || 'Product'}</h3>
                    <p className='cart-item-price'>${itemPrice.toFixed(2)}</p>
                    <p className='cart-item-subtotal'>Subtotal: ${itemTotal.toFixed(2)}</p>
                  </div>
                  <button 
                    className='expand-btn' 
                    onClick={() => toggleExpand(item.id)}
                    aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                  >
                    {isExpanded ? '▲' : '▼'}
                  </button>
                </div>
                
                {isExpanded && (
                  <div className='cart-item-expanded'>
                    <p className='cart-item-description'>{item.description || 'No description available.'}</p>
                    <div className='cart-item-quantity'>
                      <button 
                        className='quantity-btn' 
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        aria-label='Decrease quantity'
                      >
                        -
                      </button>
                      <input 
                        type='number'
                        className='quantity-input'
                        value={item.quantity || 1}
                        min='1'
                        max='99'
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        aria-label='Quantity'
                      />
                      <button 
                        className='quantity-btn' 
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        aria-label='Increase quantity'
                      >
                        +
                      </button>
                    </div>
                    <div className='cart-item-actions'>
                      <button 
                        className='remove-btn' 
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                      <button 
                        className='save-later-btn'
                        onClick={() => removeFromCart(item.id)}
                      >
                        Save for Later
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className='cart-summary'>
          <h2>Order Summary</h2>
          <div className='summary-item'>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className='summary-item'>
            <span>Shipping:</span>
            <span className={shipping === 0 ? 'free-shipping' : ''}>
              {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <div className='summary-item'>
            <span>Tax (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className='summary-item total-breakdown'>
            <span>Total:</span>
            <span className='final-total'>${finalTotal.toFixed(2)}</span>
          </div>
          {shipping > 0 && subtotal > 0 && (
            <p className='shipping-hint'>
              Add ${(100 - subtotal).toFixed(2)} more for FREE shipping!
            </p>
          )}
          <button className='checkout-btn'>Proceed to Checkout</button>
          <button className='clear-cart-btn' onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart