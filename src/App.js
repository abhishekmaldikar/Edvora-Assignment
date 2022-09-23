import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route >

        <Route path='/Cart' element={< Cart />}>

        </Route >

      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
