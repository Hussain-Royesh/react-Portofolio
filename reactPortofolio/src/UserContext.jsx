import { Children, createContext, use, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider =({Children}) =>{

    const [user] = useState({
        name:"Nasim",
        email:"Nasim2023@gmail.com",
        phone:787787877,
    })
    return <UserContext.Provider value={{user}}>

    </UserContext.Provider>
}


export const useUser = () => useContext(UserContext);
