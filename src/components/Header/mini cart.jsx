<<<<<<< Updated upstream:src/components/Header/mini cart.jsx
import React, { useState } from 'react';
import '../../style/extend.scss';
import { Link } from 'react-router-dom';

function MiniCart() {
    const [dropdown, senDropdown] = useState(false)
=======
import React, { useContext, useEffect, useState } from 'react';
import '../../../style/extend.scss';
import { Link } from 'react-router-dom';
import CartPopup from './cartPopap';
import CartContext from '../../../store/cartContext';

function MiniCart() {
    const [dropdown, setDropdown] = useState(false)
    const [isItem, setIsItem] = useState(false)
    const [counterOfItems, setCounterOfItems] = useState(0)
    const cartCtx = useContext(CartContext)
>>>>>>> Stashed changes:src/components/Header/Mini Cart/mini cart.jsx

    useEffect(() => {
        if (cartCtx.items.length > 0) {
            setIsItem(true)
            setCounterOfItems(cartCtx.items.length)
        }
    }, [cartCtx])

    return (
        <div
            className='mini-cart-wrapper'
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
        >
<<<<<<< Updated upstream:src/components/Header/mini cart.jsx
            <Link to='/cart'>
                <div className={`mini-cart-icon ${dropdown === true ? 'active' : ''}`}>
                    <div
                        className={`mini-cart-dropdown ${dropdown === true ? 'active' : ''}`}>
                        <div className='mini-cart-dropdown-content'>
                            <span>You can see some content</span>
                        </div>
=======
            <div className={`mini-cart-icon ${dropdown === true ? 'active' : ''}`}>
                <div
                    className={`mini-cart-dropdown ${dropdown === true ? 'active' : ''}`}>
                    <div className='mini-cart-dropdown-content'>
                        {!isItem && <span>You have no items in cart</span>}
                        {isItem && <CartPopup />}
>>>>>>> Stashed changes:src/components/Header/Mini Cart/mini cart.jsx
                    </div>
                </div>
                <div className={`icon icon-shopping-cart`}>
                </div>
                {counterOfItems > 0 &&
                    <div className='counter-cart'>
                        <span>{counterOfItems}</span>
                    </div>
                }
            </div>
        </div>
    );
}

export default MiniCart;