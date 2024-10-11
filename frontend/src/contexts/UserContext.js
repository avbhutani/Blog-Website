import {createContext,useContext, useState} from 'react'

export const UserContext = createContext(null)


// Making userContext to be available for everyone
export const UserProvider = (props)=> {
    const [user,setUser] = useState(null)
    return (
    <UserContext.Provider value={{user,setUser}} >
        {props.children}
    </UserContext.Provider>
    )
}