import React, { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider =  ({children}) => {

    const  [User , SetUser] = useState(null)
    return (
    <UserContext.Provider value={{User , SetUser}}>
     {children}
    </UserContext.Provider>
    ) 
} 

export default UserContextProvider