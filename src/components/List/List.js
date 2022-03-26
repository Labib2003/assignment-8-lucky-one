import ListItem from '../ListItem/ListItem';
import './List.css'

const List = (props) => {
    const { selectedProducts, removeItem, clearList } = props;

    const selectRandom = () => {
        if (selectedProducts.length > 0) {
            const max = selectedProducts.length;
            const random = Math.floor(Math.random() * (max - 1));
            alert(selectedProducts[random].name);
        }
        else {
            alert('Please select some items first');
        }
    }

    return (
        <div className='selected-toys'>
            <h3>Selected Toys</h3>
            <br />
            <div className="items">
                {
                    selectedProducts.map(selectedProduct => <ListItem
                        key={selectedProduct.id}
                        selectedProduct={selectedProduct}
                        removeItem={removeItem}
                    ></ListItem>)
                }
            </div>
            <button className='list-interaction-buttons' onClick={selectRandom}>Select a random item</button>
            <br />
            <button className='list-interaction-buttons' onClick={clearList}>Clear List</button>
        </div>
    );
};

export default List;