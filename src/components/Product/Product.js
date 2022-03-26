import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, img, name, price } = props.product;
    const { selectButton } = props;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='toy-info'>
                <p>{name}</p>
                <p>Price: {price} Taka</p>
                <br />
                <button className='add-buttons' onClick={() => selectButton(id)}>Add to list <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;