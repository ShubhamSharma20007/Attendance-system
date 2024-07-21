import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider =({children})=>{
    const loginUser =JSON.parse(localStorage.getItem('login-user'))
    const [currentUser,setCurrentUser] =useState({
        username:'',
        email:''
    })
    useEffect(()=>{
     
            setCurrentUser({
                username:loginUser?.username,
                email:loginUser?.email
            })
        
    },[])

    return <UserContext.Provider value={{currentUser,setCurrentUser}}>
        {children}
    </UserContext.Provider>
}