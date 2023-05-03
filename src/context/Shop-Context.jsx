

import React, { createContext, useState } from 'react'
import { items } from '../product';

export const ShopContext = createContext(null);

const getDefault =()=>{
    let itemsid={}
    for (let i=1; i<items.length + 1; i++){
        itemsid[i]=0;
    }
    return itemsid;
}

export const ShopContextProvider = (props)=>{

const [cart, setcart]=useState(getDefault());
const addtocart=(cartid)=>{
    setcart(
        (prev)=>({...prev, [cartid]: prev[cartid] +1} )
    )

}

const removecart=(cartid)=>{
    setcart((prev)=>({...prev, [cartid]: prev[cartid] -1})
    )
}
const contextvalue={
cart, addtocart,removecart
}
return <ShopContext.Provider value={contextvalue}> {props.children}</ShopContext.Provider>
} 