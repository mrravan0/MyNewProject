import { createContext, useEffect, useState } from "react";
import photo1 from '../Assets/Images/Cart/photo1.png'
import photo2 from '../Assets/Images/Cart/photo2.png'
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [total, setTotal] = useState(0);
    const [fakeData, setFakeData] = useState(
        [
            {
                id: 0,
                image: photo1,
                price: 650,
                text: 'LCD Monitor',
                quantity: 1,
                subtotal: 650,
            },
            {
                id: 1,
                text: 'H1 Gamepad',
                price: 550,
                image: photo2,
                quantity: 1,
                subtotal: 550,
            }
        ]
    )

    useEffect(() => {
        const newTotal = fakeData.reduce((sum, item) => {
            return sum + (item.subtotal ?? (item.price * (item.quantity ?? 1)));
        }, 0);
        setTotal(newTotal);
    }, [])

    return (
        <DataContext.Provider value={{ total, setTotal, fakeData, setFakeData }}>
            {children}
        </DataContext.Provider>
    );
};