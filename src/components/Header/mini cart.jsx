import React, { useContext, useEffect, useState } from 'react';
import '../../style/extend.scss';
import CartPopup from './Mini Cart/cartPopup';
import CartContext from '../../store/cartContext';

function MiniCart() {
    const [dropdown, setDropdown] = useState(false)
    const [isItem, setIsItem] = useState(false)
    const [counterOfItems, setCounterOfItems] = useState(0)
    const cartCtx = useContext(CartContext)

    useEffect(() => {
        if (cartCtx.items.length > 0) {
            setIsItem(true)
        } else {
            setIsItem(false)
        }
        setCounterOfItems(cartCtx.items.length)
    }, [cartCtx])

    return (
        <div
            className='mini-cart-wrapper'
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
        >
            <div className={`mini-cart-icon ${dropdown === true ? 'active' : ''}`}>
                <div
                    className={`mini-cart-dropdown ${dropdown === true ? 'active' : ''}`}>
                    <div className='mini-cart-dropdown-content'>
                        {!isItem && <span>You have no items in cart</span>}
                        {isItem && <CartPopup />}
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