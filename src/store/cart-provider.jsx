import React, { useReducer } from 'react';
import CartContext from './cartContext';

const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {

    if (action.type === 'ADD') { // додаємо новий обєкт в корзину
        const existingItem = state.items.find(item => item.name === action.items.name); //перевірка пошуку такого самого елемента в корзині
        if (existingItem) {
            return state //якщо перевірка пройшла на додавання такого самого обєкту state вертаєм дефолтний
        }
        const updateItems = state.items.concat(action.items) // зєднання старого масиву items і нового
        const updateTotalAmount = parseInt(state.totalAmount) + parseInt(action.items.price) // оновлення загальної ціни
        return { // вертаємо новий обєкт в state
            items: updateItems,
            totalAmount: updateTotalAmount.toFixed(2)
        }
    }
    if (action.type === 'REMOVE') { // видаляємо обєкт з корзини

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