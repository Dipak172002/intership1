import { createContext,useState } from "react";


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
    const [isOpen, setIsOpen] = useState(false)
    const [showIcons, setShowIcons] = useState(false) ;

    
return(
    <ProductContext.Provider value={{data,setData,values,setValues,activeEditIndex, setActiveEditIndex,initialValue,showIcons, setShowIcons,isOpen, setIsOpen}}>
    {children}
    
    </ProductContext.Provider>
)
}
