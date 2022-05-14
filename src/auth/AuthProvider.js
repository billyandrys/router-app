import React, { createContext, useState, useEffect } from 'react'


export const AuthContext = createContext()

export default function AuthProvider({children}) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
    useEffect(()=>{
        try {
            localStorage.setItem('user', JSON.stringify(user))
        } catch (error) {
            localStorage.removeItem('user')
            console.log(error)
        }
    })

    const contexValue = {
        user,
        login(){
            
            setUser({id:1, username:'David'})
           
        },
        logout(){
             setUser(null)
        },
        islogged(){
            return !!user
        }

    }
  return <AuthContext.Provider value={contexValue}>
            {children}
    </AuthContext.Provider>
  
}
