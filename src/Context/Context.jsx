import { createContext, useState } from "react";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [total, setTotal] = useState(0);

    return (
        <DataContext.Provider value={{ total, setTotal }}>
            {children}
        </DataContext.Provider>
    );
};