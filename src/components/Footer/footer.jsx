import React from 'react';
import '../../style/extend.scss';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-top-container'>
                <div className='main-container footer-top-flex'>
                    <div className='item item-left'>
                        <ul className='links'>
                            <li>Search Terms</li>
                            <li>Site Map</li>
                            <li>Advanced Search</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='item item-right'>Tag line</div>
                </div>
            </div>
            <div className='footer-primary-container'>
                <div className='main-container'>
                    <div className='footer-primary'>
                        <div className='footer-primary-left'>
                            <div className='socialicons'>
                                <a href="#!"><span className='icon icon-social-facebook'></span></a>
                                <a href="#!"><span className='icon icon-social-pinterest'></span></a>
                                <a href="#!"><span className='icon icon-social-skype'></span></a>
                                <a href="#!"><span className='icon icon-social-linkedin'></span></a>
                            </div>
                        </div>
                        <div className='footer-primary-right'>
                            <div className='newsletter-wrapper'>
                                <div className='content'>
                                    <label className='label' for="newsletter">
                                        <span>Sign up for news & special offers!</span>
                                    </label>
                                    <div className='field newsletter icon-mail'>

                                        <input type="email" placeholder='Enter Email Address' />
                                    </div>
                                    <div className='actions'>
                                        <button className='action subscribe primary'>
                                            <span>subscribe</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-secondary'>

                    </div>
                </div>
            </div>
            <div className='footer-secondary-container'>
                <div className='main-container'>w</div>
            </div>
            <div className='footer-bottom-container section-container'>
                <div className='main-container'>s</div>
            </div>
        </div>
    );
};

export default Footer;