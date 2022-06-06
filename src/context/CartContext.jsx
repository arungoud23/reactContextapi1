import React,{createContext} from "react";
import {useState} from 'react'

export const CartContext = createContext()

export const CartProvider=({children}) =>{
    const [count,setCount] = useState(0)
    function addCart(){
       return setCount(count+1)
    }
    return (<CartContext.Provider value={{count,addCart}}>{children}</CartContext.Provider>)
};