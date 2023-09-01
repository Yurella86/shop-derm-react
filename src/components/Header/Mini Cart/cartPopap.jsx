import React, { Fragment } from 'react';

const CartPopap = () => {
    return (
        <Fragment>
            <div className='pop-ap-wrapper'>
                <div className='pop-ap-items'>

                    <div className='flex-box-items'>
                        <img src="#" alt="product image" />
                    </div>

                    <div className='item-description'>
                        <div className='title'>Some Title</div>
                        <div className='price'>Price: <strong>000</strong></div>
                        <div className='quantity'>
                            <label htmlFor="qty">Qty</label>
                            <input type="number" name="qty" id="qty" />
                        </div>
                    </div>

                    <div className='total-wrapper'>
                        <div className='total-items'>
                            Number of items: <span><strong>999</strong></span>
                        </div>
                        <div className='wrapper-total-price'>
                            <div className='total-title'>Total:</div>
                            <div className='total-prise'>$0000</div>
                        </div>
                    </div>

                    <div className='wrapper-button'>
                        <button>
                            <span>Go to Checkout</span>
                        </button>
                    </div>
                </div>
                <div>

                </div>

            </div>
        </Fragment>
    );
};

export default CartPopap;