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

    const removeItem = (id) => {
        const newSelectedProducts = selectedProducts.filter(selectedProduct => selectedProduct.id !== id);
        setSelectedProducts(newSelectedProducts);
    }

    const clearList = () => {
        setSelectedProducts([]);
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
            <br />
            <div>
                <List
                    key={selectedProducts.length}
                    selectedProducts={selectedProducts} 
                    removeItem={removeItem} 
                    clearList={clearList}
                    >
                </List>
            </div>
        </div>
    );
};

export default Store;