
import React from 'react';
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import { Navbar } from 'react-bootstrap';

export const Navbarme =() => {
    return(
     <Navbar className='left-side' bg="dark"> 
        <div >
            <Link to='/'>
            shop
            
            </Link>
          <Link to='/cart'>
            <ShoppingCart size={32}/>


          </Link>
        </div>
      </Navbar>
)};
