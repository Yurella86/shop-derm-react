import React, { Fragment, useContext } from 'react';
import '../../../style/extend.scss';
import ProductItem from '../../Products/productItem';
import ProductContext from '../../../store/ProductApi/productContext';

const Products = () => {
    const productCtx = useContext(ProductContext)
    console.log(productCtx);

    const itemsOfProducts = productCtx.map((item, index) =>
        <ProductItem
            key={index + 1}
            id={item.id}
            image={item.image}
            name={`${item.name}`}
            price={item.price} />)

    return (
        <Fragment>
            <div className='main-container'>
                <div className='grid-container'>
                    <div className='breadcrumbs'>Category / Products</div>
                    <div className='nav-bar'>
                        <div>navigation</div>
                    </div>
                    <div className='content-products'>
                        <div className="wrapper-category">
                            <h1 className='title-category' style={{ 'width': 'fit-content' }}>Products</h1>
                            <div className="navigation">navigation</div>
                            <hr />
                            <div className="products-wrapper">
                                <ul className='items'>
                                    {itemsOfProducts}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Products;