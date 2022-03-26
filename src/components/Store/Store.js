import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='products'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Store;