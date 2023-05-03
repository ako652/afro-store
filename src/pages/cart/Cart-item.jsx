import React from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';




export const Cartitems = (props)=>{
    return <Col xs={6}>
    <Card >
         <Card.Img variant="top" src={props.data.productimage}   />
         <Card.Body>
           <Card.Text>
            {console.log(props.data.production)}
            
            <br />
            ${props.data.price}
           </Card.Text>
           {console.log(props.data.id)}
           
            
 
           
         </Card.Body>
        
       </Card>
   </Col>
}