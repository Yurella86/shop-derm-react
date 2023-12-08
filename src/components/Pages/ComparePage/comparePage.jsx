import React, { useContext } from 'react';
import CompareContext from '../../../store/ComparePage/compareContext';
import CompareItem from './compareItem';


const ComparePage = () => {
    const ctxCompare = useContext(CompareContext)

    console.log(!!ctxCompare.items);

    const items = ctxCompare.items.map(item =>
        <CompareItem
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            article={item.article}
        />
    )

    return (
        <div>
            <h1 style={{ 'width': 'fit-content', 'margin': '0 auto' }}>Compare</h1>
            <div className='wrapper-compare-content'>
                <div className="flex-hr-container">
                    {!!items.length ? items : <div>Dont have Items</div>}
                </div>
            </div>

        </div>
    );
};

export default ComparePage;