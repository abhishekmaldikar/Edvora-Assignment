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
    <div >
      <b className='cart'>Cart</b>
      <b>Subtotal:$ {total}</b>
      {
        cart.length>0 ?( cart.map( (prod) =>(
          <div
          key={prod.title}
          > <Card className="mb-2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./dummy-product_2.jpg" />
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
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
         :(<samp>Cart is empty</samp>)
      }
    </div>
  )
}

export default Cart