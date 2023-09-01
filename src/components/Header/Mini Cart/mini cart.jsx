import React, { useState } from 'react';
import '../../../style/extend.scss';
import { Link } from 'react-router-dom';
import CartPopap from './cartPopap';

function MiniCart() {
    const [dropdown, senDropdown] = useState(false)
    const [isItem, senIsItem] = useState(true)

    function handleHover() {
        senDropdown(true);
    }
    function handleMouseLeave() {
        senDropdown(false);
    }

    return (
        <div
            className='mini-cart-wrapper'
            onMouseOver={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            <Link to='/cart'>
                <div className={`mini-cart-icon ${dropdown === true ? 'active' : ''}`}>
                    <div
                        className={`mini-cart-dropdown ${dropdown === true ? 'active' : ''}`}>
                        <div className='mini-cart-dropdown-content'>
                            {!isItem && <span>You have no items in cart</span>}
                            {isItem && <CartPopap />}
                        </div>
                    </div>
                    <span className={`icon icon-shopping-cart`}>
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default MiniCart;