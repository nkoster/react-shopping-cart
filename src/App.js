import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart'
import p from './data/products'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cart initialItems={p} />
      </header>
    </div>
  );
}

export default App;
