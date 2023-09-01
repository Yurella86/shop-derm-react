import React, { useContext } from 'react';
import ProductItem from '../../Products/productItem';
import ProductContext from '../../../store/ProductApi/productContext';
import { ThreeDots } from 'react-loader-spinner';
import Wrong from '../../../images/something-went-wrong.webp'



const ProductTubs = ({ categoryTub }) => {
    const productCtx = useContext(ProductContext)

    if (!productCtx) {
        return (
            <div className='loading-product'><span>loading <ThreeDots
                height="10"
                width="50"
                radius="9"
                color="#06282b"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ display: 'inline' }}
                wrapperClassName="loader"
                visible={true}
            /></span></div>
        )
    }
    if (productCtx.length <= 0) {
        return (
            <div className='wrong-product'><img src={Wrong} alt="cat" /></div >
        )
    }

    const filteredProduct = productCtx.filter((item) => item.selling === categoryTub)
    const itemsOfProducts = filteredProduct.map((item, index) =>
        <ProductItem
            key={index + 1}
            id={item.id}
            image={item.image}
            name={`${item.name}`}
            price={item.price}
        // categoryTub={`category is "${categoryTub}"`}
        />)

    return (
        <div id='tab-1' className='r-tabs-panel'>
            <div className="products-wrapper">
                <ul className='items'>
                    {itemsOfProducts}
                </ul>
            </div>
        </div>
    );
};

export default ProductTubs;