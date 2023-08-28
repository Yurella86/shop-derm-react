import React, { useState } from 'react';
import '../../../style/extend.scss';
import { Link } from 'react-router-dom';

function MiniCart() {
    const [dropdown, senDropdown] = useState(false)

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
                            <span>You can see some content</span>
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