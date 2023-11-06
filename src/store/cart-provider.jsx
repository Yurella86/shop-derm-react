import React, { useReducer } from 'react';
import CartContext from './cartContext';

const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {

    if (action.type === 'ADD') { // add a new object to the cart
        const existingItem = state.items.find(item => item.name === action.items.name); //checking to find the same item in the shopping cart
        if (existingItem) {
            return state //if the check was passed on adding the same state object, the default is returned
        }
        const updateItems = state.items.concat(action.items) // connection of the old items array and the new one
        const updateTotalAmount = parseInt(state.totalAmount) + parseInt(action.items.price) // updating the total price
        return { // return the new object to state
            items: updateItems,
            totalAmount: updateTotalAmount.toFixed(2)
        }
    }
    if (action.type === 'REMOVE') { // remove the object from the basket

        function findToPrice() {
            let newPrice;
            state.items.forEach(element => {
                if (element.id === action.id) {
                    newPrice = state.totalAmount - element.price
                }
            });
            return newPrice.toFixed(2)
        }

        const filteredArray = state.items.filter(item => item.id !== action.id);
        const updateTotalAmount = findToPrice()
        return {
            items: filteredArray,
            totalAmount: updateTotalAmount
        }
    }
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState)

    const addToCart = (item) => {
        dispatchAction({ type: 'ADD', items: item })
    };
    const removeFromCart = (id) => {
        dispatchAction({ type: 'REMOVE', id: id })
    };

    const cartProducts = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCart,
        removeItem: removeFromCart
    }

    return (
        <CartContext.Provider value={cartProducts}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;