import ListItem from '../ListItem/ListItem';

const List = (props) => {
    const { selectedProducts } = props;
    const { removeItem } = props;

    return (
        <div>
            <h3>This is a list</h3>
            {
                selectedProducts.map(selectedProduct => <ListItem
                    key={selectedProduct.id}
                    selectedProduct={selectedProduct}
                    removeItem={removeItem}
                ></ListItem>)
            }
            <button>Select a random item</button>
        </div>
    );
};

export default List;