import React, { useState } from 'react';
import '../../../style/extend.scss';

const ItemOfCart = ({ image, price, name }) => {

    const [quantity, setQuantity] = useState(1)

    function deleteHandleItem(params) {

    }

    return (
        <div className='item-wrapper'>
            <hr />
            <section className='flex-box-item'>
                <div className='item-image'>
                    <img src={image} alt="product" />
                </div>

                <div className='description'>
                    <div className='title'>{name}</div>
                    <div className='price'>Price: <strong>{price}</strong></div>
                    <div className='quantity'>
                        <label htmlFor="qty">Qty</label>
                        <input type="number" name="qty" id="qty" value={quantity} />
                    </div>
                </div>

                <div className='item-actions'>
                    <div className='delete-item'>
                        <span class="icon-delete" onClick={deleteHandleItem}></span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ItemOfCart;