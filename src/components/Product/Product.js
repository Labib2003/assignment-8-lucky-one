import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p>Price: {price}</p>
                <button>Add to list <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;