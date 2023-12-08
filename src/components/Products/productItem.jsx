import React, { useContext } from 'react';
import CartContext from '../../store/cartContext';
import CompareContext from '../../store/ComparePage/compareContext';


const ProductItem = ({ id, image, name, price, categoryTub }) => {

    const ctx = useContext(CartContext)
    const ctxCompare = useContext(CompareContext)


    const addToCartHandler = () => {
        ctx.addItem({
            id: id,
            image: image,
            name: name,
            price: price,
        })
    }

    const addToCompareHandler = () => {
        ctxCompare.addToCompare({
            id: id,
            image: image,
            name: name,
            price: price,
            article: 'art'
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
                            <span className="icon icon-arrow-repeat" onClick={addToCompareHandler}></span>
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