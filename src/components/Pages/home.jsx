import React, { useContext } from 'react';
import Banners from '../Mine/Banners/banners';
import Bestsellers from '../Mine/Home Tabs/bestsellers';
import MyContext from '../../store/product-context';

const Home = () => {

    const productCtx = useContext(MyContext)
    const itemsOfProducts = productCtx.items.map((item) => <Bestsellers key={item.id} image={item.image} name={item.name} price={item.price} />)

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
            <Banners />
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
                            {itemsOfProducts}
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