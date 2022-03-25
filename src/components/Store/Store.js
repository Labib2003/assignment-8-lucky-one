import React from 'react';
import './Store.css'

const Store = (props) => {
    const { name, price, img } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default Store;