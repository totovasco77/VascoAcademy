import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const useUsersContext = () => {
    return useContext(authContext);
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    return (
        <authContext.Provider
          value={{
            user,
            setUser
          }}
        >
            {children}
        </authContext.Provider>  
    );
}