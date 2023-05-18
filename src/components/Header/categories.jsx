// import '../style/extend.scss';
import React, { useState } from 'react';

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
                            <a href="#!">{category}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;