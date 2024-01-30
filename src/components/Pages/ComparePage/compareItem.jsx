import React, { useContext } from 'react';
import CartContext from '../../../store/cartContext';
import CompareContext from '../../../store/ComparePage/compareContext';

const CompareItem = ({ id, image, name, price, article }) => {

    const ctxCompare = useContext(CompareContext)
    const ctx = useContext(CartContext)

    const addToCartHandler = () => {
        ctx.addItem({
            id: id,
            image: image,
            name: name,
            price: price
        })
    }

    const deleteHandler = () => {
        ctxCompare.removeFromCompare(id)
    }

    return (
        <div className="item">
            <div className='item-wrap'>
                <img src={image} alt="product foto" />
                <div className='description'>
                    <div className='title'>
                        <h3>{name}</h3>
                    </div>
                    <div className='price'>
                        <span>{price}</span>
                    </div>
                    <div className='article'>
                        <span>{article}</span>
                    </div>
                    <div className='btn'>
                        <button onClick={addToCartHandler}>
                            add to cart
                        </button>
                        <button onClick={deleteHandler}>
                            delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompareItem;