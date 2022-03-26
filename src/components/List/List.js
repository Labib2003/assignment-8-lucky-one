import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = (props) => {
    return (
        <div>
            <h3>This is a list</h3>
            {
                props.selectedProducts.map(selectedProduct => <ListItem selectedProduct={selectedProduct}></ListItem>)
            }
        </div>
    );
};

export default List;