import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  Card,
  ListGroup,
} from "react-bootstrap";
import React, { useState,useEffect } from 'react'
import '../App.css';


const Cart = ({state,dispatch}) => {
  const { cart } = state;
  const [total , setTotal] = useState('')

  const changeQty = (product_id , qty) => {
    dispatch ({
      type : 'CHANGE_CART_QTY',
      payload : {
      product_id,
        qty,
      }
    })
  };
  useEffect(() => {
    setTotal(cart.reduce((acc , curr) => acc+Number(curr.price)*curr.qty,0),
    
    );
   }, [cart])
  


  return (
    <div className="parent">
      <div className="scroll">
      <b className='cart'> Your Basket </b>
      <br></br>
      <Navbar.Text onClick={() => dispatch({
        type : 'EMPTY_CART',
        })}>
          
      </Navbar.Text>
      
      
      {
        cart.length>0 ?( cart.map( (prod) =>(
          <div
          key={prod.title}
          > <Card className="mb-2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./dummy-product_2.jpg" />
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Title>₹{prod.price}</Card.Title>
            
            <div className="button">
            <Button onClick={ ()=> changeQty(prod.product_id,prod.qty-1)}
            variant="danger">-</Button>{''}
            {prod.qty}
            <Button onClick={ ()=> changeQty(prod.product_id,prod.qty+1)}
            variant="success">+</Button>{''}
            </div>
          </Card.Body>
        </Card>
        </div>
        ) 
        ) )
         :(<samp>  is empty</samp>)
      }
      
      </div>
      <div style={{padding: "15px", borderRadius:"10px" , border : "0.5px solid #787878" , marginTop : "20px" }}>Subtotal:₹ {total}</div>
    </div>
  )
}

export default Cart