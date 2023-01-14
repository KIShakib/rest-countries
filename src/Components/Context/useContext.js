import { createContext, useState } from "react";

export const ContextAPI = createContext();

const ContextProvider = ({ children }) => {
    const [toggleTheme, setToggleTheme] = useState(false);

    const context = {
        toggleTheme,
        setToggleTheme
    }

    return (
        <ContextAPI.Provider value={context}>
            {children}
        </ContextAPI.Provider>
    )

}

export default ContextProvider;