import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
