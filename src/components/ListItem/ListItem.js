import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <button className='delete-button' onClick={() => removeItem(id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        </div>
    );
};

export default ListItem;