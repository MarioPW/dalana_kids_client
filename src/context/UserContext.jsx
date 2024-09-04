import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState("")
    const [buttonText, setButtonText] = useState("Ingresar")
    const [userEmail, setUserEmail] = useState("")
    const [password, setUserPassword] = useState("")
    const [product, setProduct] = useState()

    return  <UserContext.Provider value={{token, setToken, buttonText, setButtonText, setUserEmail, userEmail, password, setUserPassword, product, setProduct }}>{children}</UserContext.Provider>
};

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserProvider")
    }
    return context
}