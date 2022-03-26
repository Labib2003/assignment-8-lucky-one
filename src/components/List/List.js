import ListItem from '../ListItem/ListItem';

const List = (props) => {
    const { selectedProducts } = props;
    const { removeItem } = props;

    const selectRandom = () => {
        if (selectedProducts.length > 0) {
            const max = selectedProducts.length;
            alert(selectedProducts[Math.floor(Math.random() * (max - 1))].name);
        }
        else{
            alert('Please select some items first');
        }
    }

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
            <button onClick={selectRandom}>Select a random item</button>
        </div>
    );
};

export default List;