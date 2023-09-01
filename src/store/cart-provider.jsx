import React, { useReducer } from 'react';
import ProductContext from './product-context';
import productImage from '../images/products/jeuveau-sku_31.jpg'

const defaultCartState = {
    items: [
        {
            id: 1,
            image: productImage,
            name: 'Jeuveau® By the Unit',
            price: 1.6
        },
        {
            id: 2,
            name: 'secound',
            price: 23.6
        },
        {
            id: 3,
            name: 'Third',
            price: 55
        },
        {
            id: 4,
            name: 'Forth',
            price: 4243
        },
        {
            id: 5,
            name: 'Forth',
            price: 4243
        }
    ],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADDITEM') {

    }
    if (action.type === 'REMOVEITEM') {

    }
    return defaultCartState
}


const CartProvider = (props) => {
    const [cartstate, dispatchAction] = useReducer(cartReducer, defaultCartState)

    const addToCart = (item) => {
        dispatchAction({
            type: 'ADDITEM',
            item: item
        })
    };
    const removeFromCart = (id) => {
        dispatchAction({
            type: 'REMOVEITEM',
            id: id
        })
    };

    const products = {
        items: cartstate.items,
        totalAmount: cartstate.totalAmount,
        addItem: addToCart,
        removeItem: removeFromCart
    }

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default CartProvider;