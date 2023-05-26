import React from 'react';
import banner from '../../images/banners/banner 4.jpg'
import productImage from '../../images/products/jeuveau-sku_31.jpg'

const Home = () => {
    return (
        <div>
            {/* <section className="slide-wrapper">
                <div id="slider" className="slider">
                    <div className="slide">
                        <img src={slide.slide1} alt={slide.slide1}></img>
                    </div>
                </div>
                <div className="btn left">
                    <span>&#10094;</span>
                </div>
                <div className="btn right">
                    <span>&#10095;</span>
                </div>
            </section>
            <section className="tabs-wrapper">
                section 2
            </section> */}

            <section className='banners'>
                <img src={banner} alt="banner" />
            </section>
            <section className='main-container horizontal-tab'>
                <ul className='tabs-nav'>
                    <li className='tabs-state'><a href="#tab-1">Bestsellers</a></li>
                    <li className='tabs-state'><a href="#tab-2">This Month's Specials</a></li>
                    <li className='tabs-state'><a href="#tab-3">Staff Favorites</a></li>
                </ul>
                <hr />
                <div id='tab-1' className='r-tabs-panel'>
                    <div className="products-wrapper">
                        <ul className='items'>
                            <li className='product-item'>
                                <div className='product-wrap'>
                                    <div className='product-item-img'>
                                        <img src={productImage} alt="productImage" />
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
                                        <h3 className='product-title'>Jeuveau® By the Unit</h3>
                                        <div className='price'>$13.00</div>
                                        <div className='action primary'>
                                            <button>add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div id='tab-2' className='r-tabs-panel'>tab-2</div>
                <div id='tab-3' className='r-tabs-panel'>tab-3</div> */}


            </section>
        </div>
    );
};

export default Home;