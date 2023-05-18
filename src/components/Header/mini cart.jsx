import React, { useState } from 'react';
// import '../../style/extend.scss';

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
            className='item mini-cart-wrapper'
            onMouseOver={handleHover}
            onMouseLeave={handleMouseLeave}>
            <div className='mini-cart-icon'>cart
            </div>

            <div
                className={`mini-cart-dropdown ${dropdown === true ? 'active' : ''}`}>
                <div className='dropdown'>
                </div>
                <div className='mini-cart-dropdown-content'>
                    <span>You can see some content</span>
                </div>
            </div>
        </div>
    );
}

export default MiniCart;