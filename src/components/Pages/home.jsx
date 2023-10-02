import React, { useState } from 'react';
import ProductTubs from '../Mine/Home Tabs/productTubs';
import Banners from '../Mine/Banners/banners';

const Home = () => {

    const [stateTab, setStateTab] = useState('bestsellers');

    return (
        <div>
            <Banners />
            <section className='main-container horizontal-tab'>
                <ul className='tabs-nav'>
                    <li className={stateTab === 'bestsellers' ? 'tabs-state active' : 'tabs-state'} onClick={() => setStateTab('bestsellers')} ><span>Bestsellers</span></li>
                    <li className={stateTab === 'monthsSpecials' ? 'tabs-state active' : 'tabs-state'} onClick={() => setStateTab('monthsSpecials')} ><span>This Month's Specials</span></li>
                    <li className={stateTab === 'staffFavorites' ? 'tabs-state active' : 'tabs-state'} onClick={() => setStateTab('staffFavorites')} ><span>Staff Favorites</span></li>
                </ul>
                <hr />
                {stateTab && <ProductTubs categoryTub={stateTab} />}
            </section>
        </div>
    );
};

export default Home;