import React, { useState } from 'react';
import ProductTubs from '../Mine/Home Tabs/productTubs';
import Banners from '../Mine/Banners/banners';

const Home = () => {

    const [stateTab, setStateTab] = useState('bestsellers');

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
                    <li className='tabs-state' onClick={() => setStateTab('bestsellers')} ><span>Bestsellers</span></li>
                    <li className='tabs-state' onClick={() => setStateTab('monthsSpecials')} ><span>This Month's Specials</span></li>
                    <li className='tabs-state' onClick={() => setStateTab('staffFavorites')} ><span>Staff Favorites</span></li>
                </ul>
                <hr />
                {stateTab && <ProductTubs categoryTub={stateTab} />}
            </section>

        </div>
    );
};

export default Home;