import React, { useContext } from 'react';
import CartContext from '../../store/cartContext';


const ProductItem = ({ id, image, name, price, categoryTub }) => {

    const ctx = useContext(CartContext)

    const addToCartHandler = () => {
        ctx.addItem({
            id: id,
            image: image,
            name: name,
            price: price,
        })
    }

    return (
        <li className='product-item'>
            <div className='product-wrap'>
                <div className='product-item-img'>
                    <img src={image} alt="productImage" />
                    <div className='icons'>
                        <div className='wish-list'>
                            <span className="icon icon-heart"></span>
                        </div>
                        <div className='compare'>
                            <span className="icon icon-arrow-repeat"></span>
                        </div>
                    </div>
                </div>
                <div className='product-item-info'>
                    <h3 className='product-title'>{name}</h3>
                    <div className='price'>{`$${price}`}</div>
                    <div className='action primary'>
                        <div className='category'>{categoryTub}</div>
                        <button onClick={addToCartHandler}>add to cart</button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ProductItem;