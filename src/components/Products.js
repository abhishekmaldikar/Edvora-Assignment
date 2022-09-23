import React from 'react'
import {
    Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
    Card,
    ListGroup
}from "react-bootstrap";
import '../App.css';

const Products = ({ state, dispatch }) => {

    const { products, cart } = state;

    return (
        <div className='row border-end'>
            {products.map((prod) => (
                <div className='col mb-3'>
                  <Card style={{ width: '20vw' }}>
                    <Card.Img variant="top" src="./dummy-product_2.jpg" />
                    <Card.Body>
                      <Card.Title>{prod.name}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>${prod.selling_price}</ListGroup.Item>
                      <ListGroup.Item>{prod.stock} left</ListGroup.Item>
                      <ListGroup.Item>
                        {
                          cart.some(p=>p.product_id === prod.product_id) ? 
                          <Button onClick= {() => dispatch({
                            type : 'REMOVE_FROM_CART',
                            payload : prod,
                        
                          })}
                          variant="danger" size="sm">
                          Remove From Cart
                          </Button> :
                          <Button onClick= {() => dispatch({
                            type : 'ADD_TO_CART',
                            payload : {
                              product_id : prod.product_id,
                              title : prod.name,
                              qty : 1 ,
                              price : prod.selling_price,
                            }
                          })} variant="success" size="sm">
                          Add To Cart
                          </Button>
                        }
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
            ))}
        </div>
    )
}

export default Products