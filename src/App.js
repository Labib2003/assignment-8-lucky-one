import './App.css';
import Store from './components/Store/Store';
import Header from './components/Header/Header';
import List from './components/List/List';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Store></Store>
    </div>
  );
}

export default App;