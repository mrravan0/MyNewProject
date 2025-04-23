import { createContext, useState } from "react";
import photo1 from '../Assets/Images/Cart/photo1.png'
import photo2 from '../Assets/Images/Cart/photo2.png'
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [total, setTotal] = useState(0);
    const [fakeData, setFakeData] = useState(
        [
            {
                image: photo1,
                price: 650,
                text: 'LCD Monitor'
            },
            {
                text: 'H1 Gamepad',
                price: 550,
                image: photo2
            }
        ]
    )
    console.log(fakeData);
    

    // useEffect(() => {
    //     const newResult = information.price * counter;
    //     setResult(newResult);
    //     setTotal(prevTotal => (prevTotal || 0) + newResult);
    // }, [information.price, counter]);

    return (
        <DataContext.Provider value={{ total, setTotal, fakeData ,setFakeData}}>
            {children}
        </DataContext.Provider>
    );
};