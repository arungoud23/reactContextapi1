import React,{createContext} from 'react'
import { useState } from 'react'


export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [isAutherized,setIsAutherized] = useState(false)

    const login = (username,password) =>{
        console.log(username,password)
        if(username && password){
            setIsAutherized(true)
        }
        
    }
     
    const logout = () =>(
        setIsAutherized(false)
    )
    
     return (<AuthContext.Provider value={{isAutherized,login,logout}}>{children}</AuthContext.Provider>)
}