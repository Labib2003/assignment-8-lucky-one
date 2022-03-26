import React from 'react';
import './ListItem.css'

const ListItem = (props) => {
    const { img, name } = props.selectedProduct;
    return (
        <div className='listItem'>
            <div>
                <img src={img} alt="" />
            </div>
            <p>{name}</p>
            <button>delete</button>
        </div>
    );
};

export default ListItem;