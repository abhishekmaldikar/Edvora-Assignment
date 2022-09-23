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
      
      
      <Products state = {state} dispatch = {dispatch}/>
      <Cart state = {state} dispatch = {dispatch}/>
    </div>
  )
}

export default Home