/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import React from 'react';

export const FirebaseContext = createContext(null)
export const AuthContext = createContext(null)

export default function Context ({children}){
    const [user,setUser] = useState('hello')
    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}