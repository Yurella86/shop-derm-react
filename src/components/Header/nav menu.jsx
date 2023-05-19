import React from 'react';
import '../../style/extend.scss';
import { Link } from 'react-router-dom';

function HeaderNavMenu() {
    return (
        <div className='hd-nav-menu'>
            <ul>
                <Link to='/account'>
                    <li>Account</li>
                </Link>
                <li><a href="#!">Wish List</a></li>
                <li><a href="#!">Sign In</a></li>
                <li><a href="#!">Sign Up</a></li>
                <li><a href="#!">Back to Website</a></li>
            </ul>
        </div>
    );
}

export default HeaderNavMenu;