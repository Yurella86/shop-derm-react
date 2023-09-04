import React, { useState } from 'react';
import '../../../style/extend.scss';

const ItemOfCart = ({ id, image, price, name, deleteItem }) => {

    const [quantity, setQuantity] = useState()

    function deleteHandleItem() {
        deleteItem(id)
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