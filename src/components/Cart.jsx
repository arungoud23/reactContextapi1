import React from 'react'
import {useContext} from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {addCart} = useContext(CartContext)
  return (
    <div>Cart
        <button onClick={addCart} >Add to Cart</button>
    </div>
  )
}

export default Cart