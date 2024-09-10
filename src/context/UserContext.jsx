import { createContext, useState } from "react";
import { useContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [product, setProduct] = useState()
    const [user, setUser] = useState(false)

    return <UserContext.Provider value={{ setUser, user, product, setProduct }}>{children}</UserContext.Provider>
};

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserProvider")
    }
    return context
}