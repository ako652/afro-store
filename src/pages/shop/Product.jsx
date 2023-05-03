
import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-Context';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export const Product =(props)=>{
  const {addtocart, cart}=useContext(ShopContext)
 const cartitemamount=cart[props.data.id]
    return(
    
    <Col xs={6}>
   <Card >
        <Card.Img variant="top" src={props.data.productimage}   />
        <Card.Body>
          <Card.Text>
           {props.data.production}
           <br />
           ${props.data.price}
          </Card.Text>
          {console.log(props.data.id)}
          <Button variant="secondary"  onClick={ () => addtocart(props.data.id)} > add to cart
          {cartitemamount > 0 && <> ({cartitemamount})</> }
          </Button>
           

          
        </Card.Body>
       
      </Card>
  </Col>
    )
}