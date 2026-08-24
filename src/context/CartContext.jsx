import React, { createContext, useContext, useReducer } from 'react'

export const CartContext = createContext();

const initialState = {
    cart: [],
    totalItems: 0,
    totalPrice: 0
};

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            const price = parseFloat(action.payload.price) || 0;
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + price
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1, price: price }],
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + price
            };
        case 'REMOVE_FROM_CART':
            const itemToRemove = state.cart.find(item => item.id === action.payload);
            if (itemToRemove) {
                const itemPrice = parseFloat(itemToRemove.price) || 0;
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload),
                    totalItems: state.totalItems - itemToRemove.quantity,
                    totalPrice: state.totalPrice - (itemPrice * itemToRemove.quantity)
                };
            }
            return state;
        case 'UPDATE_QUANTITY':
            const itemToUpdate = state.cart.find(item => item.id === action.payload.id);
            if (itemToUpdate) {
                const itemPrice = parseFloat(itemToUpdate.price) || 0;
                const quantityDiff = action.payload.quantity - itemToUpdate.quantity;
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: action.payload.quantity }
                            : item
                    ),
                    totalItems: state.totalItems + quantityDiff,
                    totalPrice: state.totalPrice + (itemPrice * quantityDiff)
                };
            }
            return state;
        case 'CLEAR_CART':
            return initialState;
        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    
    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
        }
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <CartContext.Provider value={{ 
            cart: state.cart, 
            totalItems: state.totalItems, 
            totalPrice: state.totalPrice,
            addToCart, 
            removeFromCart, 
            updateQuantity,
            clearCart 
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
