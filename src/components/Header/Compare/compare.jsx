import React from 'react';
import '../../../style/extend.scss';
import { Link } from 'react-router-dom';

function Compare() {
    return (
        <div className='item compare-wrapper'>
            <div className='compare'>
                <Link to="/compare">
                    <span className="icon icon-arrow-repeat"></span>
                </Link>
            </div>
        </div>
    );
}

export default Compare;