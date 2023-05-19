import React, { useState } from 'react';
import '../../style/extend.scss';

function MiniCart() {

    const [dropdown, senDropdown] = useState(false)

    function handleHover() {
        senDropdown(true);
        console.log(dropdown);
    }

    function handleMouseLeave() {
        senDropdown(false);
        console.log(dropdown);
    }

    return (
        <div
            className='mini-cart-wrapper'
            onMouseOver={handleHover}
            onMouseLeave={handleMouseLeave}
        >
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
        </div>
    );
}

export default MiniCart;