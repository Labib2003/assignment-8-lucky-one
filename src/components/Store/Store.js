import React from 'react';

const Store = (props) => {
    const {name, id, price} = props.product;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Store;