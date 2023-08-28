import React from 'react';
import banner from '../../../images/banners/banner 4.jpg'

const Banners = () => {
    return (
        <div>
            <section className='banners'>
                <img src={banner} alt="banner" />
            </section>
        </div>
    );
};

export default Banners;