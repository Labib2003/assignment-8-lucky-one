import { useEffect, useState } from 'react';
import './App.css';
import Store from './components/Store/Store';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

  return (
    <div className="App">
      <header>
        <h3>Toy store</h3>
      </header>
      {
        products.map(product => <Store key={product.id} product={product}></Store>)
      }
    </div>
  );
}

export default App;
