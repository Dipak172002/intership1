import { createContext,useState } from "react";
import { data } from "react-router";

export const ProductContext = createContext();

export default function ProductProvider({ children }){ 

    const initialValue = {
        userName: "",
        price: "",
        weight: "",
        img: "",
    };
    const [values, setValues]= useState(initialValue);
    const [data, setData] = useState([]);
    const [activeEditIndex, setActiveEditIndex] = useState(null);


return(
    <ProductContext.Provider value={{data,setData,values,setValues,activeEditIndex, setActiveEditIndex,initialValue}}>
    {children}
    </ProductContext.Provider>
)
}
