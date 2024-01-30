import React, { Fragment } from 'react';
import Header from '../../Header/header';
import Footer from '../../Footer/footer';
import HomeContent from '../home';

const HomePage = () => {
    return (
        <Fragment>
            <div id='top'></div>
            <div className='button-to-top'>
                <a href='#top'><span className='icon icon-chevron-right'></span></a>
            </div>
            <main>
                <HomeContent />
            </main>
        </Fragment>
    );
};

export default HomePage;