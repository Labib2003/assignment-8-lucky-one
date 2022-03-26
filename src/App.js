import './App.css';
import Store from './components/Store/Store';
import Header from './components/Header/Header';
import List from './components/List/List';
import Questions from './components/Questions/Questions';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Store></Store>
      <Questions></Questions>
    </div>
  );
}

export default App;