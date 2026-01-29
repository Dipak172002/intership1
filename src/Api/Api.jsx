import axios from "axios";
import { ProductContext } from "../Usecontext/context";
import { useContext, useEffect } from "react";


const p_URL = 'http://localhost:3001/products'
// export defaultconst { data ,setData} = useContext(ProductContext);
  
 export const getUserData = async() =>{
    const response = await axios.get(p_URL)
    console.log(response);
    return response.data;
    
  }

  export const createUser = async(value)=>{
    const response = await axios.post(p_URL,value);
    return response.data;
  }

export const updateUser = async(id,value)=>{
    const response = await axios.patch(`${p_URL}/${id}`,value)
    return response.data
  }

export const deleteProduct = async (id,value) => {
    const response = await axios.delete(`${p_URL}/${id}`,value);
    // setData(data.filter((item) => item.id !== id));
    return response.data
   }