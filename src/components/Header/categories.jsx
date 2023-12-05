import '../../style/extend.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Categories({ items, onclickItem }) {

    const [active, setActive] = useState()

    const onSelectItem = (index) => {
        setActive(index)
        onclickItem(items[index])
    }

    return (
        <div className='nav-categories'>
            <ul>
                {
                    items.map((category, index) => (
                        <li
                            className={active === index ? 'active' : ''}
                            key={`${category}_${index}`}
                            onClick={() => onSelectItem(index)}>
                            <Link to={`category/${category.replace(/\s+/g, '_').toLowerCase()}`}>{category}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;