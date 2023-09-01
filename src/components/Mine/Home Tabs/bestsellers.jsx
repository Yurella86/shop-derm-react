import React from 'react';

const Bestsellers = ({ image, name, price }) => {

    if (price) {
        var price = price.toFixed(2)
    }
    if (!image) {

        console.log("немає картинки в " + name);
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
                        <button>add to cart</button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Bestsellers;