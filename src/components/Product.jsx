import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart'


const Product = () => {
  const {isAutherized} = useContext(AuthContext)
  return (
    <div>Product:{isAutherized ? "LoggedIn":"LoggedOut"}
        <Cart />
    </div>
  )
}

export default Product