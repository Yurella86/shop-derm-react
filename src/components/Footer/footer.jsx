import React from 'react';
import '../../style/extend.scss';
import bluepay from "../../images/bluepay_1.png";
import letsencrypt from "../../images/letsencrypt.png";

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
                            <div className='socialIcons'>
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
                        <div className='footer-secondary-wrapper'>
                            <div className='first-block'>
                                <div className='footer-block-wrapper'>
                                    <h6 className='block-title'>My Account</h6>
                                    <ul className='block-content'>
                                        <li><a href="#!">My Account</a></li>
                                        <li><a href="#!">My Addresses</a></li>
                                        <li><a href="#!">My Order History</a></li>
                                        <li><a href="#!">My Rewards</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='second-block'>
                                <div className='footer-block-wrapper'>
                                    <h6 className='block-title'>Support & Information</h6>
                                    <ul className='block-content'>
                                        <li><a href="#!">About the Rewards Program</a></li>
                                        <li><a href="#!">Fitzpatrick Scale</a></li>
                                        <li><a href="#!">Terms and Conditions</a></li>
                                        <li><a href="#!">Return Policy</a></li>
                                        <li><a href="#!">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='third-block'>
                                <div className='footer-block-wrapper'>
                                    <h6 className='block-title'>Secure Shopping</h6>
                                    <div className='block-content'>
                                        <a href="#!">
                                            <img src={letsencrypt} alt="letsencrypt" />
                                        </a>
                                        <a href="#!">
                                            <img src={bluepay} alt="blupay" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='firth-block'>
                                <div className='footer-block-wrapper'>
                                    <h6 className='block-title'>Contact Us</h6>
                                    <div className='block-content'>
                                        <div className="contacts">
                                            <span className='icon icon-location'></span>
                                            <p className='no-margin'>
                                                2606 Stewart Ave Ste 100<br />
                                                Wausau, WI 54401
                                            </p>
                                        </div>
                                        <div className="contacts">
                                            <span className='icon icon-phone'></span>
                                            <p className='no-margin'>
                                                Phone:<a href="tel:+17153540999">
                                                    (715) 354-0999
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-secondary-container'>
                <div className='main-container'>w</div>
            </div>
            <div className='footer-bottom-container section-container'>
                <div className='main-container'>
                    <div className='footer-bottom'>
                        <div className='footer-copyright'>
                            <span>© 2023 Eleve Plastic Surgery and Medspa. All rights reserved. | Powered by</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;