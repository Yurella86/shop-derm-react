import React from 'react';
import '../../../style/extend.scss';
import { Link } from 'react-router-dom';

function HeaderNavMenu() {
    return (
        <div className='hd-nav-menu'>
            <ul>
                <li><Link to='/account'><span>Account</span></Link></li>
                <li><Link to='/wish_list'><span>Wish List</span></Link></li>
                <li><Link to='/sign_in'><span>Sign In</span></Link></li>
                <li><Link to='/sign_up'><span>Sign Up</span></Link></li>
                <li><Link to='/back_to_website'><span>Back to Website</span></Link></li>
            </ul>
        </div>
    );
}

export default HeaderNavMenu;