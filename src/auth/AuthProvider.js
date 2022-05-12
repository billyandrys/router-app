import React, { createContext, useState } from 'react'


export const AuthContext = createContext()

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)

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
