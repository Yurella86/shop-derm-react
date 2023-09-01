import '../../../style/extend.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Categories({ items }) {

    const [active, setActive] = useState()

    const onSelectItem = (index) => {
        setActive(index)
    }

    return (
        <div className='nav-categories'>
            <ul>
                {
                    items.map((category, index) => (
                        <Link to={`category/${category.replace(/\s+/g, '_').toLowerCase()}`}>
                            <li
                                className={active === index ? 'active' : ''}
                                key={`${category}_${index}`}
                                onClick={() => onSelectItem(index)}>
                                <a href="#!">{category}</a>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;