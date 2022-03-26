import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([]);

    const [selectedProducts, setSelectedProducts] = useState([]);

    const selectButton = (id) => {
        if (selectedProducts.length >= 4) {
            alert("You can't add more than 4 items.");
        }
        else {
            const exists = selectedProducts.find(selectedProduct => selectedProduct.id === id);
            if (exists) {
                alert("You can't add duplicate items.");
            }
            else {
                const newSelectedProducts = [...selectedProducts, products.find(product => product.id === id)]
                setSelectedProducts(newSelectedProducts);
            }
        }
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='store-container'>
            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        selectButton={selectButton}
                    ></Product>)
                }
            </div>
            <div>
                <List
                    key={selectedProducts.length}
                    selectedProducts={selectedProducts}>
                </List>
            </div>
        </div>
    );
};

export default Store;