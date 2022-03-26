import React from 'react';
import './ListItem.css'

const ListItem = (props) => {
    const { id ,img, name } = props.selectedProduct;
    const {removeItem} = props;
    return (
        <div className='listItem'>
            <div>
                <img src={img} alt="" />
            </div>
            <p>{name}</p>
            <button onClick={() => removeItem(id)}>delete</button>
        </div>
    );
};

export default ListItem;