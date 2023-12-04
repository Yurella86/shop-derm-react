import React, { Fragment } from 'react';
import '../../../style/extend.scss';
import ItemOfCart from './itemOfCart';
import { useContext } from 'react';
import CartContext from '../../../store/cartContext';
import { Link } from 'react-router-dom';

const CartPopup = () => {
    const cartCtx = useContext(CartContext)

    function handelDeleteItem(idItem) {
        cartCtx.removeItem(idItem)
    }

    const arrItemsInCart = cartCtx.items.map((item) =>
        <ItemOfCart
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            deleteItem={(idItem) => handelDeleteItem(idItem)}
        />)
    const totalItems = cartCtx.items.length
    const totalPrice = cartCtx.totalAmount




    return (
        <Fragment>
            <div className='popup-wrapper'>
                <div className='popup-items'>
                    <div className="popup-items-wrapper">
                        {arrItemsInCart}
                    </div>
                    <hr />
                    <div className='total-wrapper'>
                        <div className='total-items'>
                            <span><strong>{totalItems}</strong> </span>
                            Item in Cart
                        </div>
                        <div className='wrapper-total-price'>
                            <div className='total-title'>Total price:</div>
                            <div className='total-prise'><strong>{totalPrice}$</strong></div>
                        </div>
                    </div>

                    <div className='wrapper-button'>
                        <button>
                            <Link to="/checkout">Go to Checkout</Link>
                        </button>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default CartPopup;