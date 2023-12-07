import React from 'react';

const ComparePage = () => {

    const items = [1, 2, 3, 4, 5, 6, 7].map(item =>
        <div className="item">
            <div className='item-wrap'>
                <div className='image'>
                    image
                </div>
                <div className='description'>
                    <div className='title'>
                        <h3>name</h3>
                    </div>
                    <div className='price'>
                        <span>13245</span>
                    </div>
                    <div className='article'>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates voluptatum eum nam temporibus, nemo, facere officia in ipsum debitis sequi, commodi laborum. Sunt, ut. Non quas ab distinctio aliquid.</span>
                    </div>
                    <div className='btn'>
                        <button>
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>)

    return (
        <div>
            <h1 style={{ 'width': 'fit-content', 'margin': '0 auto' }}>Compare</h1>
            <div className='wrapper-compare-content'>
                <div className="flex-hr-container">
                    {items}
                </div>
            </div>

        </div>
    );
};

export default ComparePage;