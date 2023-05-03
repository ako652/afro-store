
import React from 'react'
import {items} from '../../product'

import Row from 'react-bootstrap/Row';
import Container  from 'react-bootstrap/Container';
import { Product } from './Product';

export const Shop=()=>{
    return(
        <Container>
        <Row  md={3} className="g-4" >
        {items.map((product) => (
         <Product data={product} />
        ))}
      </Row>
      </Container>
    )
}