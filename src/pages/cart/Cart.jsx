import React, { useContext } from 'react'
import { items } from '../../product'
import { ShopContext } from '../../context/Shop-Context'
import { Cartitems } from './Cart-item'
import { Container,Row } from 'react-bootstrap'


export const Cart =()=>{
  const {cart} =useContext(ShopContext)
    return(
      <Container>
      <Row  md={3} className="g-4" >
      {items.map((product) => {
        if (cart[product.id]!==0) {
          return <Cartitems  data={product}/>;
        }
      }
      
      )}
    </Row>
    </Container>
    )
}