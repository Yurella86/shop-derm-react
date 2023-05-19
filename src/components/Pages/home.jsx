import React from 'react';

const Home = () => {
    return (
        <div>
            <section className="slide-wrapper">
                <div id="slider" className="slider">
                    <div className="slide">
                        {/* <img src={slide.slide1} alt={slide.slide1}></img> */}
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
            </section>
        </div>
    );
};

export default Home;