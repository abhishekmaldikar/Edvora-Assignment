import React, { useEffect , useReducer } from 'react'
import axios from 'axios';
import { cartReducer } from '../Reducers/cartReducer';
import Products from './Products';
import Header from './Header';
import Cart from './Cart';


const Home = () => {

    const [state, dispatch] = useReducer(cartReducer , {
        products : [],
        cart : [],
    });

     console.log(state);
    const fetchProducts = async () => {
        const { data } = await axios.get('https://assessment.api.vweb.app/products');
        
    

    dispatch ({

        type:'ADD_PRODUCTS',
        payload: data,
    })
    };

    useEffect (() => {
        fetchProducts();
    } , []);
  return (
    <div>
      <div className="row">
      <div className="col-9">
        <Products state = {state} dispatch = {dispatch}/>
      </div>
      <div className="col-3">
        <Cart state = {state} dispatch = {dispatch}/>
      </div>
      </div>
    </div>
  )
}

export default Home