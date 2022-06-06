import React from 'react'
import Wishlist from './Wishlist'
import { useContext } from 'react' 
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
  const {isAutherized,login,logout} = useContext(AuthContext)
  const {isTheme,toggleTheme} = useContext(ThemeContext)
  return (
    <div>Navbar
      <button onClick={()=>{
        if(isAutherized) logout()
        else login("A","R")
        }}>{isAutherized ? "Logout":"Login"}</button>

        <button onClick={toggleTheme}>{`make ${isTheme ? "dark":"light"}`}</button>
        <Wishlist />
    </div>
  )
}

export default Navbar