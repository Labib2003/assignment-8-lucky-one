import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])

  return (
    <div className="App">
      <header>
        <h3>Toy store</h3>
      </header>
    </div>
  );
}

export default App;
